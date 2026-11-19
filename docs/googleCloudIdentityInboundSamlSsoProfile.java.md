# `googleCloudIdentityInboundSamlSsoProfile` Submodule <a name="`googleCloudIdentityInboundSamlSsoProfile` Submodule" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCloudIdentityInboundSamlSsoProfile <a name="GoogleCloudIdentityInboundSamlSsoProfile" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile google_cloud_identity_inbound_saml_sso_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_identity_inbound_saml_sso_profile.GoogleCloudIdentityInboundSamlSsoProfile;

GoogleCloudIdentityInboundSamlSsoProfile.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .idpConfig(GoogleCloudIdentityInboundSamlSsoProfileIdpConfig)
//  .customer(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(GoogleCloudIdentityInboundSamlSsoProfileTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.Initializer.parameter.idpConfig">idpConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfig">GoogleCloudIdentityInboundSamlSsoProfileIdpConfig</a></code> | idp_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.Initializer.parameter.customer">customer</a></code> | <code>java.lang.String</code> | The customer. For example: 'customers/C0123abc'. If omitted, the customer of the caller is used. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Human-readable name of the SAML SSO profile. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#id GoogleCloudIdentityInboundSamlSsoProfile#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeouts">GoogleCloudIdentityInboundSamlSsoProfileTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `idpConfig`<sup>Required</sup> <a name="idpConfig" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.Initializer.parameter.idpConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfig">GoogleCloudIdentityInboundSamlSsoProfileIdpConfig</a>

idp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#idp_config GoogleCloudIdentityInboundSamlSsoProfile#idp_config}

---

##### `customer`<sup>Optional</sup> <a name="customer" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.Initializer.parameter.customer"></a>

- *Type:* java.lang.String

The customer. For example: 'customers/C0123abc'. If omitted, the customer of the caller is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#customer GoogleCloudIdentityInboundSamlSsoProfile#customer}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#deletion_policy GoogleCloudIdentityInboundSamlSsoProfile#deletion_policy}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Human-readable name of the SAML SSO profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#display_name GoogleCloudIdentityInboundSamlSsoProfile#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#id GoogleCloudIdentityInboundSamlSsoProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeouts">GoogleCloudIdentityInboundSamlSsoProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#timeouts GoogleCloudIdentityInboundSamlSsoProfile#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.putIdpConfig">putIdpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.resetCustomer">resetCustomer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIdpConfig` <a name="putIdpConfig" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.putIdpConfig"></a>

```java
public void putIdpConfig(GoogleCloudIdentityInboundSamlSsoProfileIdpConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.putIdpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfig">GoogleCloudIdentityInboundSamlSsoProfileIdpConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.putTimeouts"></a>

```java
public void putTimeouts(GoogleCloudIdentityInboundSamlSsoProfileTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeouts">GoogleCloudIdentityInboundSamlSsoProfileTimeouts</a>

---

##### `resetCustomer` <a name="resetCustomer" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.resetCustomer"></a>

```java
public void resetCustomer()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleCloudIdentityInboundSamlSsoProfile resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_identity_inbound_saml_sso_profile.GoogleCloudIdentityInboundSamlSsoProfile;

GoogleCloudIdentityInboundSamlSsoProfile.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_identity_inbound_saml_sso_profile.GoogleCloudIdentityInboundSamlSsoProfile;

GoogleCloudIdentityInboundSamlSsoProfile.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_identity_inbound_saml_sso_profile.GoogleCloudIdentityInboundSamlSsoProfile;

GoogleCloudIdentityInboundSamlSsoProfile.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_identity_inbound_saml_sso_profile.GoogleCloudIdentityInboundSamlSsoProfile;

GoogleCloudIdentityInboundSamlSsoProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleCloudIdentityInboundSamlSsoProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleCloudIdentityInboundSamlSsoProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleCloudIdentityInboundSamlSsoProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleCloudIdentityInboundSamlSsoProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleCloudIdentityInboundSamlSsoProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.idpConfig">idpConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference">GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.inboundSamlSsoProfileId">inboundSamlSsoProfileId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.spConfig">spConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList">GoogleCloudIdentityInboundSamlSsoProfileSpConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference">GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.customerInput">customerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.idpConfigInput">idpConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfig">GoogleCloudIdentityInboundSamlSsoProfileIdpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeouts">GoogleCloudIdentityInboundSamlSsoProfileTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.customer">customer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `idpConfig`<sup>Required</sup> <a name="idpConfig" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.idpConfig"></a>

```java
public GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference getIdpConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference">GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference</a>

---

##### `inboundSamlSsoProfileId`<sup>Required</sup> <a name="inboundSamlSsoProfileId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.inboundSamlSsoProfileId"></a>

```java
public java.lang.String getInboundSamlSsoProfileId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `spConfig`<sup>Required</sup> <a name="spConfig" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.spConfig"></a>

```java
public GoogleCloudIdentityInboundSamlSsoProfileSpConfigList getSpConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList">GoogleCloudIdentityInboundSamlSsoProfileSpConfigList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.timeouts"></a>

```java
public GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference">GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference</a>

---

##### `customerInput`<sup>Optional</sup> <a name="customerInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.customerInput"></a>

```java
public java.lang.String getCustomerInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `idpConfigInput`<sup>Optional</sup> <a name="idpConfigInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.idpConfigInput"></a>

```java
public GoogleCloudIdentityInboundSamlSsoProfileIdpConfig getIdpConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfig">GoogleCloudIdentityInboundSamlSsoProfileIdpConfig</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.timeoutsInput"></a>

```java
public IResolvable|GoogleCloudIdentityInboundSamlSsoProfileTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeouts">GoogleCloudIdentityInboundSamlSsoProfileTimeouts</a>

---

##### `customer`<sup>Required</sup> <a name="customer" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.customer"></a>

```java
public java.lang.String getCustomer();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfile.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCloudIdentityInboundSamlSsoProfileConfig <a name="GoogleCloudIdentityInboundSamlSsoProfileConfig" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_identity_inbound_saml_sso_profile.GoogleCloudIdentityInboundSamlSsoProfileConfig;

GoogleCloudIdentityInboundSamlSsoProfileConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .idpConfig(GoogleCloudIdentityInboundSamlSsoProfileIdpConfig)
//  .customer(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(GoogleCloudIdentityInboundSamlSsoProfileTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.idpConfig">idpConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfig">GoogleCloudIdentityInboundSamlSsoProfileIdpConfig</a></code> | idp_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.customer">customer</a></code> | <code>java.lang.String</code> | The customer. For example: 'customers/C0123abc'. If omitted, the customer of the caller is used. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Human-readable name of the SAML SSO profile. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#id GoogleCloudIdentityInboundSamlSsoProfile#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeouts">GoogleCloudIdentityInboundSamlSsoProfileTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `idpConfig`<sup>Required</sup> <a name="idpConfig" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.idpConfig"></a>

```java
public GoogleCloudIdentityInboundSamlSsoProfileIdpConfig getIdpConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfig">GoogleCloudIdentityInboundSamlSsoProfileIdpConfig</a>

idp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#idp_config GoogleCloudIdentityInboundSamlSsoProfile#idp_config}

---

##### `customer`<sup>Optional</sup> <a name="customer" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.customer"></a>

```java
public java.lang.String getCustomer();
```

- *Type:* java.lang.String

The customer. For example: 'customers/C0123abc'. If omitted, the customer of the caller is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#customer GoogleCloudIdentityInboundSamlSsoProfile#customer}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#deletion_policy GoogleCloudIdentityInboundSamlSsoProfile#deletion_policy}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Human-readable name of the SAML SSO profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#display_name GoogleCloudIdentityInboundSamlSsoProfile#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#id GoogleCloudIdentityInboundSamlSsoProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileConfig.property.timeouts"></a>

```java
public GoogleCloudIdentityInboundSamlSsoProfileTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeouts">GoogleCloudIdentityInboundSamlSsoProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#timeouts GoogleCloudIdentityInboundSamlSsoProfile#timeouts}

---

### GoogleCloudIdentityInboundSamlSsoProfileIdpConfig <a name="GoogleCloudIdentityInboundSamlSsoProfileIdpConfig" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_identity_inbound_saml_sso_profile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfig;

GoogleCloudIdentityInboundSamlSsoProfileIdpConfig.builder()
    .entityId(java.lang.String)
    .singleSignOnServiceUri(java.lang.String)
//  .changePasswordUri(java.lang.String)
//  .logoutRedirectUri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfig.property.entityId">entityId</a></code> | <code>java.lang.String</code> | The SAML **Entity ID** of the identity provider. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfig.property.singleSignOnServiceUri">singleSignOnServiceUri</a></code> | <code>java.lang.String</code> | The 'SingleSignOnService' endpoint location (sign-in page URL) of the identity provider. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfig.property.changePasswordUri">changePasswordUri</a></code> | <code>java.lang.String</code> | The **Change Password URL** of the identity provider. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfig.property.logoutRedirectUri">logoutRedirectUri</a></code> | <code>java.lang.String</code> | The **Logout Redirect URL** (sign-out page URL) of the identity provider. |

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfig.property.entityId"></a>

```java
public java.lang.String getEntityId();
```

- *Type:* java.lang.String

The SAML **Entity ID** of the identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#entity_id GoogleCloudIdentityInboundSamlSsoProfile#entity_id}

---

##### `singleSignOnServiceUri`<sup>Required</sup> <a name="singleSignOnServiceUri" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfig.property.singleSignOnServiceUri"></a>

```java
public java.lang.String getSingleSignOnServiceUri();
```

- *Type:* java.lang.String

The 'SingleSignOnService' endpoint location (sign-in page URL) of the identity provider.

This is the URL where the 'AuthnRequest' will be sent. Must use 'HTTPS'.
Assumed to accept the 'HTTP-Redirect' binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#single_sign_on_service_uri GoogleCloudIdentityInboundSamlSsoProfile#single_sign_on_service_uri}

---

##### `changePasswordUri`<sup>Optional</sup> <a name="changePasswordUri" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfig.property.changePasswordUri"></a>

```java
public java.lang.String getChangePasswordUri();
```

- *Type:* java.lang.String

The **Change Password URL** of the identity provider.

Users will be sent to this URL
when changing their passwords at 'myaccount.google.com'. This takes precedence over
the change password URL configured at customer-level. Must use 'HTTPS'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#change_password_uri GoogleCloudIdentityInboundSamlSsoProfile#change_password_uri}

---

##### `logoutRedirectUri`<sup>Optional</sup> <a name="logoutRedirectUri" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfig.property.logoutRedirectUri"></a>

```java
public java.lang.String getLogoutRedirectUri();
```

- *Type:* java.lang.String

The **Logout Redirect URL** (sign-out page URL) of the identity provider.

When a user
clicks the sign-out link on a Google page, they will be redirected to this URL. This is
a pure redirect with no attached SAML 'LogoutRequest' i.e. SAML single logout is not
supported. Must use 'HTTPS'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#logout_redirect_uri GoogleCloudIdentityInboundSamlSsoProfile#logout_redirect_uri}

---

### GoogleCloudIdentityInboundSamlSsoProfileSpConfig <a name="GoogleCloudIdentityInboundSamlSsoProfileSpConfig" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_identity_inbound_saml_sso_profile.GoogleCloudIdentityInboundSamlSsoProfileSpConfig;

GoogleCloudIdentityInboundSamlSsoProfileSpConfig.builder()
    .build();
```


### GoogleCloudIdentityInboundSamlSsoProfileTimeouts <a name="GoogleCloudIdentityInboundSamlSsoProfileTimeouts" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_identity_inbound_saml_sso_profile.GoogleCloudIdentityInboundSamlSsoProfileTimeouts;

GoogleCloudIdentityInboundSamlSsoProfileTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#create GoogleCloudIdentityInboundSamlSsoProfile#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#delete GoogleCloudIdentityInboundSamlSsoProfile#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#update GoogleCloudIdentityInboundSamlSsoProfile#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#create GoogleCloudIdentityInboundSamlSsoProfile#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#delete GoogleCloudIdentityInboundSamlSsoProfile#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_saml_sso_profile#update GoogleCloudIdentityInboundSamlSsoProfile#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference <a name="GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_identity_inbound_saml_sso_profile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference;

new GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.resetChangePasswordUri">resetChangePasswordUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.resetLogoutRedirectUri">resetLogoutRedirectUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChangePasswordUri` <a name="resetChangePasswordUri" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.resetChangePasswordUri"></a>

```java
public void resetChangePasswordUri()
```

##### `resetLogoutRedirectUri` <a name="resetLogoutRedirectUri" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.resetLogoutRedirectUri"></a>

```java
public void resetLogoutRedirectUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.changePasswordUriInput">changePasswordUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.entityIdInput">entityIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.logoutRedirectUriInput">logoutRedirectUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.singleSignOnServiceUriInput">singleSignOnServiceUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.changePasswordUri">changePasswordUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.entityId">entityId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.logoutRedirectUri">logoutRedirectUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.singleSignOnServiceUri">singleSignOnServiceUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfig">GoogleCloudIdentityInboundSamlSsoProfileIdpConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `changePasswordUriInput`<sup>Optional</sup> <a name="changePasswordUriInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.changePasswordUriInput"></a>

```java
public java.lang.String getChangePasswordUriInput();
```

- *Type:* java.lang.String

---

##### `entityIdInput`<sup>Optional</sup> <a name="entityIdInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.entityIdInput"></a>

```java
public java.lang.String getEntityIdInput();
```

- *Type:* java.lang.String

---

##### `logoutRedirectUriInput`<sup>Optional</sup> <a name="logoutRedirectUriInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.logoutRedirectUriInput"></a>

```java
public java.lang.String getLogoutRedirectUriInput();
```

- *Type:* java.lang.String

---

##### `singleSignOnServiceUriInput`<sup>Optional</sup> <a name="singleSignOnServiceUriInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.singleSignOnServiceUriInput"></a>

```java
public java.lang.String getSingleSignOnServiceUriInput();
```

- *Type:* java.lang.String

---

##### `changePasswordUri`<sup>Required</sup> <a name="changePasswordUri" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.changePasswordUri"></a>

```java
public java.lang.String getChangePasswordUri();
```

- *Type:* java.lang.String

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.entityId"></a>

```java
public java.lang.String getEntityId();
```

- *Type:* java.lang.String

---

##### `logoutRedirectUri`<sup>Required</sup> <a name="logoutRedirectUri" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.logoutRedirectUri"></a>

```java
public java.lang.String getLogoutRedirectUri();
```

- *Type:* java.lang.String

---

##### `singleSignOnServiceUri`<sup>Required</sup> <a name="singleSignOnServiceUri" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.singleSignOnServiceUri"></a>

```java
public java.lang.String getSingleSignOnServiceUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfigOutputReference.property.internalValue"></a>

```java
public GoogleCloudIdentityInboundSamlSsoProfileIdpConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileIdpConfig">GoogleCloudIdentityInboundSamlSsoProfileIdpConfig</a>

---


### GoogleCloudIdentityInboundSamlSsoProfileSpConfigList <a name="GoogleCloudIdentityInboundSamlSsoProfileSpConfigList" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_identity_inbound_saml_sso_profile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList;

new GoogleCloudIdentityInboundSamlSsoProfileSpConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.get"></a>

```java
public GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference <a name="GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_identity_inbound_saml_sso_profile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference;

new GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.assertionConsumerServiceUri">assertionConsumerServiceUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.entityId">entityId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfig">GoogleCloudIdentityInboundSamlSsoProfileSpConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `assertionConsumerServiceUri`<sup>Required</sup> <a name="assertionConsumerServiceUri" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.assertionConsumerServiceUri"></a>

```java
public java.lang.String getAssertionConsumerServiceUri();
```

- *Type:* java.lang.String

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.entityId"></a>

```java
public java.lang.String getEntityId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfigOutputReference.property.internalValue"></a>

```java
public GoogleCloudIdentityInboundSamlSsoProfileSpConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileSpConfig">GoogleCloudIdentityInboundSamlSsoProfileSpConfig</a>

---


### GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference <a name="GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_identity_inbound_saml_sso_profile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference;

new GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeouts">GoogleCloudIdentityInboundSamlSsoProfileTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleCloudIdentityInboundSamlSsoProfileTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundSamlSsoProfile.GoogleCloudIdentityInboundSamlSsoProfileTimeouts">GoogleCloudIdentityInboundSamlSsoProfileTimeouts</a>

---



