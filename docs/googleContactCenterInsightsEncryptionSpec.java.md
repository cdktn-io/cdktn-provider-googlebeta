# `googleContactCenterInsightsEncryptionSpec` Submodule <a name="`googleContactCenterInsightsEncryptionSpec` Submodule" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleContactCenterInsightsEncryptionSpec <a name="GoogleContactCenterInsightsEncryptionSpec" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_encryption_spec google_contact_center_insights_encryption_spec}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_contact_center_insights_encryption_spec.GoogleContactCenterInsightsEncryptionSpec;

GoogleContactCenterInsightsEncryptionSpec.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .kmsKey(java.lang.String)
    .location(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleContactCenterInsightsEncryptionSpecTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.Initializer.parameter.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | The name of customer-managed encryption key that is used to secure a resource and its sub-resources. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location in which the encryptionSpec is to be initialized. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_encryption_spec#id GoogleContactCenterInsightsEncryptionSpec#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_encryption_spec#project GoogleContactCenterInsightsEncryptionSpec#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeouts">GoogleContactCenterInsightsEncryptionSpecTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.Initializer.parameter.kmsKey"></a>

- *Type:* java.lang.String

The name of customer-managed encryption key that is used to secure a resource and its sub-resources.

If empty, the resource is secured by the default Google encryption key.
Only the key in the same location as this resource is allowed to be used for encryption.
Format: projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{key}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_encryption_spec#kms_key GoogleContactCenterInsightsEncryptionSpec#kms_key}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location in which the encryptionSpec is to be initialized.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_encryption_spec#location GoogleContactCenterInsightsEncryptionSpec#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_encryption_spec#id GoogleContactCenterInsightsEncryptionSpec#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_encryption_spec#project GoogleContactCenterInsightsEncryptionSpec#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeouts">GoogleContactCenterInsightsEncryptionSpecTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_encryption_spec#timeouts GoogleContactCenterInsightsEncryptionSpec#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.putTimeouts"></a>

```java
public void putTimeouts(GoogleContactCenterInsightsEncryptionSpecTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeouts">GoogleContactCenterInsightsEncryptionSpecTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleContactCenterInsightsEncryptionSpec resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_contact_center_insights_encryption_spec.GoogleContactCenterInsightsEncryptionSpec;

GoogleContactCenterInsightsEncryptionSpec.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_contact_center_insights_encryption_spec.GoogleContactCenterInsightsEncryptionSpec;

GoogleContactCenterInsightsEncryptionSpec.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_contact_center_insights_encryption_spec.GoogleContactCenterInsightsEncryptionSpec;

GoogleContactCenterInsightsEncryptionSpec.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_contact_center_insights_encryption_spec.GoogleContactCenterInsightsEncryptionSpec;

GoogleContactCenterInsightsEncryptionSpec.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleContactCenterInsightsEncryptionSpec.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleContactCenterInsightsEncryptionSpec resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleContactCenterInsightsEncryptionSpec to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleContactCenterInsightsEncryptionSpec that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_encryption_spec#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleContactCenterInsightsEncryptionSpec to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference">GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.kmsKeyInput">kmsKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeouts">GoogleContactCenterInsightsEncryptionSpecTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.timeouts"></a>

```java
public GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference">GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.kmsKeyInput"></a>

```java
public java.lang.String getKmsKeyInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.timeoutsInput"></a>

```java
public IResolvable|GoogleContactCenterInsightsEncryptionSpecTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeouts">GoogleContactCenterInsightsEncryptionSpecTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpec.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleContactCenterInsightsEncryptionSpecConfig <a name="GoogleContactCenterInsightsEncryptionSpecConfig" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_contact_center_insights_encryption_spec.GoogleContactCenterInsightsEncryptionSpecConfig;

GoogleContactCenterInsightsEncryptionSpecConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .kmsKey(java.lang.String)
    .location(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleContactCenterInsightsEncryptionSpecTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecConfig.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | The name of customer-managed encryption key that is used to secure a resource and its sub-resources. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location in which the encryptionSpec is to be initialized. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_encryption_spec#id GoogleContactCenterInsightsEncryptionSpec#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_encryption_spec#project GoogleContactCenterInsightsEncryptionSpec#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeouts">GoogleContactCenterInsightsEncryptionSpecTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecConfig.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

The name of customer-managed encryption key that is used to secure a resource and its sub-resources.

If empty, the resource is secured by the default Google encryption key.
Only the key in the same location as this resource is allowed to be used for encryption.
Format: projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{key}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_encryption_spec#kms_key GoogleContactCenterInsightsEncryptionSpec#kms_key}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location in which the encryptionSpec is to be initialized.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_encryption_spec#location GoogleContactCenterInsightsEncryptionSpec#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_encryption_spec#id GoogleContactCenterInsightsEncryptionSpec#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_encryption_spec#project GoogleContactCenterInsightsEncryptionSpec#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecConfig.property.timeouts"></a>

```java
public GoogleContactCenterInsightsEncryptionSpecTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeouts">GoogleContactCenterInsightsEncryptionSpecTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_encryption_spec#timeouts GoogleContactCenterInsightsEncryptionSpec#timeouts}

---

### GoogleContactCenterInsightsEncryptionSpecTimeouts <a name="GoogleContactCenterInsightsEncryptionSpecTimeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_contact_center_insights_encryption_spec.GoogleContactCenterInsightsEncryptionSpecTimeouts;

GoogleContactCenterInsightsEncryptionSpecTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_encryption_spec#create GoogleContactCenterInsightsEncryptionSpec#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_encryption_spec#delete GoogleContactCenterInsightsEncryptionSpec#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_encryption_spec#create GoogleContactCenterInsightsEncryptionSpec#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_encryption_spec#delete GoogleContactCenterInsightsEncryptionSpec#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference <a name="GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_contact_center_insights_encryption_spec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference;

new GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeouts">GoogleContactCenterInsightsEncryptionSpecTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleContactCenterInsightsEncryptionSpecTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleContactCenterInsightsEncryptionSpec.GoogleContactCenterInsightsEncryptionSpecTimeouts">GoogleContactCenterInsightsEncryptionSpecTimeouts</a>

---



