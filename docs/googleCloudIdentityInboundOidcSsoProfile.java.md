# `googleCloudIdentityInboundOidcSsoProfile` Submodule <a name="`googleCloudIdentityInboundOidcSsoProfile` Submodule" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCloudIdentityInboundOidcSsoProfile <a name="GoogleCloudIdentityInboundOidcSsoProfile" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile google_cloud_identity_inbound_oidc_sso_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_identity_inbound_oidc_sso_profile.GoogleCloudIdentityInboundOidcSsoProfile;

GoogleCloudIdentityInboundOidcSsoProfile.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .idpConfig(GoogleCloudIdentityInboundOidcSsoProfileIdpConfig)
//  .customer(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .rpConfig(GoogleCloudIdentityInboundOidcSsoProfileRpConfig)
//  .timeouts(GoogleCloudIdentityInboundOidcSsoProfileTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.idpConfig">idpConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfig">GoogleCloudIdentityInboundOidcSsoProfileIdpConfig</a></code> | idp_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.customer">customer</a></code> | <code>java.lang.String</code> | The customer. For example: 'customers/C0123abc'. If omitted, the customer of the caller is used. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Human-readable name of the OIDC SSO profile. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#id GoogleCloudIdentityInboundOidcSsoProfile#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.rpConfig">rpConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfig">GoogleCloudIdentityInboundOidcSsoProfileRpConfig</a></code> | rp_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts">GoogleCloudIdentityInboundOidcSsoProfileTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `idpConfig`<sup>Required</sup> <a name="idpConfig" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.idpConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfig">GoogleCloudIdentityInboundOidcSsoProfileIdpConfig</a>

idp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#idp_config GoogleCloudIdentityInboundOidcSsoProfile#idp_config}

---

##### `customer`<sup>Optional</sup> <a name="customer" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.customer"></a>

- *Type:* java.lang.String

The customer. For example: 'customers/C0123abc'. If omitted, the customer of the caller is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#customer GoogleCloudIdentityInboundOidcSsoProfile#customer}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#deletion_policy GoogleCloudIdentityInboundOidcSsoProfile#deletion_policy}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Human-readable name of the OIDC SSO profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#display_name GoogleCloudIdentityInboundOidcSsoProfile#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#id GoogleCloudIdentityInboundOidcSsoProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rpConfig`<sup>Optional</sup> <a name="rpConfig" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.rpConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfig">GoogleCloudIdentityInboundOidcSsoProfileRpConfig</a>

rp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#rp_config GoogleCloudIdentityInboundOidcSsoProfile#rp_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts">GoogleCloudIdentityInboundOidcSsoProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#timeouts GoogleCloudIdentityInboundOidcSsoProfile#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.putIdpConfig">putIdpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.putRpConfig">putRpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.resetCustomer">resetCustomer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.resetRpConfig">resetRpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIdpConfig` <a name="putIdpConfig" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.putIdpConfig"></a>

```java
public void putIdpConfig(GoogleCloudIdentityInboundOidcSsoProfileIdpConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.putIdpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfig">GoogleCloudIdentityInboundOidcSsoProfileIdpConfig</a>

---

##### `putRpConfig` <a name="putRpConfig" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.putRpConfig"></a>

```java
public void putRpConfig(GoogleCloudIdentityInboundOidcSsoProfileRpConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.putRpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfig">GoogleCloudIdentityInboundOidcSsoProfileRpConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.putTimeouts"></a>

```java
public void putTimeouts(GoogleCloudIdentityInboundOidcSsoProfileTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts">GoogleCloudIdentityInboundOidcSsoProfileTimeouts</a>

---

##### `resetCustomer` <a name="resetCustomer" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.resetCustomer"></a>

```java
public void resetCustomer()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.resetId"></a>

```java
public void resetId()
```

##### `resetRpConfig` <a name="resetRpConfig" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.resetRpConfig"></a>

```java
public void resetRpConfig()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleCloudIdentityInboundOidcSsoProfile resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_identity_inbound_oidc_sso_profile.GoogleCloudIdentityInboundOidcSsoProfile;

GoogleCloudIdentityInboundOidcSsoProfile.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_identity_inbound_oidc_sso_profile.GoogleCloudIdentityInboundOidcSsoProfile;

GoogleCloudIdentityInboundOidcSsoProfile.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_identity_inbound_oidc_sso_profile.GoogleCloudIdentityInboundOidcSsoProfile;

GoogleCloudIdentityInboundOidcSsoProfile.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_identity_inbound_oidc_sso_profile.GoogleCloudIdentityInboundOidcSsoProfile;

GoogleCloudIdentityInboundOidcSsoProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleCloudIdentityInboundOidcSsoProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleCloudIdentityInboundOidcSsoProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleCloudIdentityInboundOidcSsoProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleCloudIdentityInboundOidcSsoProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleCloudIdentityInboundOidcSsoProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.idpConfig">idpConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference">GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.inboundOidcSsoProfileId">inboundOidcSsoProfileId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.rpConfig">rpConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference">GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference">GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.customerInput">customerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.idpConfigInput">idpConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfig">GoogleCloudIdentityInboundOidcSsoProfileIdpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.rpConfigInput">rpConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfig">GoogleCloudIdentityInboundOidcSsoProfileRpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts">GoogleCloudIdentityInboundOidcSsoProfileTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.customer">customer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `idpConfig`<sup>Required</sup> <a name="idpConfig" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.idpConfig"></a>

```java
public GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference getIdpConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference">GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference</a>

---

##### `inboundOidcSsoProfileId`<sup>Required</sup> <a name="inboundOidcSsoProfileId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.inboundOidcSsoProfileId"></a>

```java
public java.lang.String getInboundOidcSsoProfileId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `rpConfig`<sup>Required</sup> <a name="rpConfig" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.rpConfig"></a>

```java
public GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference getRpConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference">GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.timeouts"></a>

```java
public GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference">GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference</a>

---

##### `customerInput`<sup>Optional</sup> <a name="customerInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.customerInput"></a>

```java
public java.lang.String getCustomerInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `idpConfigInput`<sup>Optional</sup> <a name="idpConfigInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.idpConfigInput"></a>

```java
public GoogleCloudIdentityInboundOidcSsoProfileIdpConfig getIdpConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfig">GoogleCloudIdentityInboundOidcSsoProfileIdpConfig</a>

---

##### `rpConfigInput`<sup>Optional</sup> <a name="rpConfigInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.rpConfigInput"></a>

```java
public GoogleCloudIdentityInboundOidcSsoProfileRpConfig getRpConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfig">GoogleCloudIdentityInboundOidcSsoProfileRpConfig</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.timeoutsInput"></a>

```java
public IResolvable|GoogleCloudIdentityInboundOidcSsoProfileTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts">GoogleCloudIdentityInboundOidcSsoProfileTimeouts</a>

---

##### `customer`<sup>Required</sup> <a name="customer" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.customer"></a>

```java
public java.lang.String getCustomer();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfile.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCloudIdentityInboundOidcSsoProfileConfig <a name="GoogleCloudIdentityInboundOidcSsoProfileConfig" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_identity_inbound_oidc_sso_profile.GoogleCloudIdentityInboundOidcSsoProfileConfig;

GoogleCloudIdentityInboundOidcSsoProfileConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .idpConfig(GoogleCloudIdentityInboundOidcSsoProfileIdpConfig)
//  .customer(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .rpConfig(GoogleCloudIdentityInboundOidcSsoProfileRpConfig)
//  .timeouts(GoogleCloudIdentityInboundOidcSsoProfileTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.idpConfig">idpConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfig">GoogleCloudIdentityInboundOidcSsoProfileIdpConfig</a></code> | idp_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.customer">customer</a></code> | <code>java.lang.String</code> | The customer. For example: 'customers/C0123abc'. If omitted, the customer of the caller is used. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Human-readable name of the OIDC SSO profile. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#id GoogleCloudIdentityInboundOidcSsoProfile#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.rpConfig">rpConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfig">GoogleCloudIdentityInboundOidcSsoProfileRpConfig</a></code> | rp_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts">GoogleCloudIdentityInboundOidcSsoProfileTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `idpConfig`<sup>Required</sup> <a name="idpConfig" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.idpConfig"></a>

```java
public GoogleCloudIdentityInboundOidcSsoProfileIdpConfig getIdpConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfig">GoogleCloudIdentityInboundOidcSsoProfileIdpConfig</a>

idp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#idp_config GoogleCloudIdentityInboundOidcSsoProfile#idp_config}

---

##### `customer`<sup>Optional</sup> <a name="customer" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.customer"></a>

```java
public java.lang.String getCustomer();
```

- *Type:* java.lang.String

The customer. For example: 'customers/C0123abc'. If omitted, the customer of the caller is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#customer GoogleCloudIdentityInboundOidcSsoProfile#customer}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#deletion_policy GoogleCloudIdentityInboundOidcSsoProfile#deletion_policy}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Human-readable name of the OIDC SSO profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#display_name GoogleCloudIdentityInboundOidcSsoProfile#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#id GoogleCloudIdentityInboundOidcSsoProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rpConfig`<sup>Optional</sup> <a name="rpConfig" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.rpConfig"></a>

```java
public GoogleCloudIdentityInboundOidcSsoProfileRpConfig getRpConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfig">GoogleCloudIdentityInboundOidcSsoProfileRpConfig</a>

rp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#rp_config GoogleCloudIdentityInboundOidcSsoProfile#rp_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileConfig.property.timeouts"></a>

```java
public GoogleCloudIdentityInboundOidcSsoProfileTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts">GoogleCloudIdentityInboundOidcSsoProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#timeouts GoogleCloudIdentityInboundOidcSsoProfile#timeouts}

---

### GoogleCloudIdentityInboundOidcSsoProfileIdpConfig <a name="GoogleCloudIdentityInboundOidcSsoProfileIdpConfig" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_identity_inbound_oidc_sso_profile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfig;

GoogleCloudIdentityInboundOidcSsoProfileIdpConfig.builder()
    .issuerUri(java.lang.String)
//  .changePasswordUri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfig.property.issuerUri">issuerUri</a></code> | <code>java.lang.String</code> | The Issuer identifier for the IdP. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfig.property.changePasswordUri">changePasswordUri</a></code> | <code>java.lang.String</code> | The **Change Password URL** of the identity provider. |

---

##### `issuerUri`<sup>Required</sup> <a name="issuerUri" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfig.property.issuerUri"></a>

```java
public java.lang.String getIssuerUri();
```

- *Type:* java.lang.String

The Issuer identifier for the IdP.

Must be a URL. The discovery URL will be derived
from this as described in Section 4 of the OIDC specification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#issuer_uri GoogleCloudIdentityInboundOidcSsoProfile#issuer_uri}

---

##### `changePasswordUri`<sup>Optional</sup> <a name="changePasswordUri" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfig.property.changePasswordUri"></a>

```java
public java.lang.String getChangePasswordUri();
```

- *Type:* java.lang.String

The **Change Password URL** of the identity provider.

Users will be sent to this URL
when changing their passwords at 'myaccount.google.com'. This takes precedence over
the change password URL configured at customer-level. Must use 'HTTPS'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#change_password_uri GoogleCloudIdentityInboundOidcSsoProfile#change_password_uri}

---

### GoogleCloudIdentityInboundOidcSsoProfileRpConfig <a name="GoogleCloudIdentityInboundOidcSsoProfileRpConfig" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_identity_inbound_oidc_sso_profile.GoogleCloudIdentityInboundOidcSsoProfileRpConfig;

GoogleCloudIdentityInboundOidcSsoProfileRpConfig.builder()
//  .clientId(java.lang.String)
//  .clientSecret(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfig.property.clientId">clientId</a></code> | <code>java.lang.String</code> | OAuth2 client ID for OIDC. Must be set together with 'client_secret'. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfig.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | Input only. OAuth2 client secret for OIDC. Must be set together with 'client_id'. |

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfig.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

OAuth2 client ID for OIDC. Must be set together with 'client_secret'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#client_id GoogleCloudIdentityInboundOidcSsoProfile#client_id}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfig.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

Input only. OAuth2 client secret for OIDC. Must be set together with 'client_id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#client_secret GoogleCloudIdentityInboundOidcSsoProfile#client_secret}

---

### GoogleCloudIdentityInboundOidcSsoProfileTimeouts <a name="GoogleCloudIdentityInboundOidcSsoProfileTimeouts" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_identity_inbound_oidc_sso_profile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts;

GoogleCloudIdentityInboundOidcSsoProfileTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#create GoogleCloudIdentityInboundOidcSsoProfile#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#delete GoogleCloudIdentityInboundOidcSsoProfile#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#update GoogleCloudIdentityInboundOidcSsoProfile#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#create GoogleCloudIdentityInboundOidcSsoProfile#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#delete GoogleCloudIdentityInboundOidcSsoProfile#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_cloud_identity_inbound_oidc_sso_profile#update GoogleCloudIdentityInboundOidcSsoProfile#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference <a name="GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_identity_inbound_oidc_sso_profile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference;

new GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.resetChangePasswordUri">resetChangePasswordUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChangePasswordUri` <a name="resetChangePasswordUri" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.resetChangePasswordUri"></a>

```java
public void resetChangePasswordUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.changePasswordUriInput">changePasswordUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.issuerUriInput">issuerUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.changePasswordUri">changePasswordUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.issuerUri">issuerUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfig">GoogleCloudIdentityInboundOidcSsoProfileIdpConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `changePasswordUriInput`<sup>Optional</sup> <a name="changePasswordUriInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.changePasswordUriInput"></a>

```java
public java.lang.String getChangePasswordUriInput();
```

- *Type:* java.lang.String

---

##### `issuerUriInput`<sup>Optional</sup> <a name="issuerUriInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.issuerUriInput"></a>

```java
public java.lang.String getIssuerUriInput();
```

- *Type:* java.lang.String

---

##### `changePasswordUri`<sup>Required</sup> <a name="changePasswordUri" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.changePasswordUri"></a>

```java
public java.lang.String getChangePasswordUri();
```

- *Type:* java.lang.String

---

##### `issuerUri`<sup>Required</sup> <a name="issuerUri" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.issuerUri"></a>

```java
public java.lang.String getIssuerUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.internalValue"></a>

```java
public GoogleCloudIdentityInboundOidcSsoProfileIdpConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileIdpConfig">GoogleCloudIdentityInboundOidcSsoProfileIdpConfig</a>

---


### GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference <a name="GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_identity_inbound_oidc_sso_profile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference;

new GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientId` <a name="resetClientId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.resetClientId"></a>

```java
public void resetClientId()
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.resetClientSecret"></a>

```java
public void resetClientSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.redirectUris">redirectUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfig">GoogleCloudIdentityInboundOidcSsoProfileRpConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `redirectUris`<sup>Required</sup> <a name="redirectUris" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.redirectUris"></a>

```java
public java.util.List<java.lang.String> getRedirectUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientSecretInput"></a>

```java
public java.lang.String getClientSecretInput();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.internalValue"></a>

```java
public GoogleCloudIdentityInboundOidcSsoProfileRpConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileRpConfig">GoogleCloudIdentityInboundOidcSsoProfileRpConfig</a>

---


### GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference <a name="GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_cloud_identity_inbound_oidc_sso_profile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference;

new GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts">GoogleCloudIdentityInboundOidcSsoProfileTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleCloudIdentityInboundOidcSsoProfileTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCloudIdentityInboundOidcSsoProfile.GoogleCloudIdentityInboundOidcSsoProfileTimeouts">GoogleCloudIdentityInboundOidcSsoProfileTimeouts</a>

---



