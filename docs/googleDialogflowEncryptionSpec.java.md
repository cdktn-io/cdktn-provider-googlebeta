# `googleDialogflowEncryptionSpec` Submodule <a name="`googleDialogflowEncryptionSpec` Submodule" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDialogflowEncryptionSpec <a name="GoogleDialogflowEncryptionSpec" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_encryption_spec google_dialogflow_encryption_spec}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_encryption_spec.GoogleDialogflowEncryptionSpec;

GoogleDialogflowEncryptionSpec.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .encryptionSpec(GoogleDialogflowEncryptionSpecEncryptionSpec)
    .location(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleDialogflowEncryptionSpecTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.Initializer.parameter.encryptionSpec">encryptionSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpec">GoogleDialogflowEncryptionSpecEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location in which the encryptionSpec is to be initialized. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_encryption_spec#id GoogleDialogflowEncryptionSpec#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_encryption_spec#project GoogleDialogflowEncryptionSpec#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeouts">GoogleDialogflowEncryptionSpecTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `encryptionSpec`<sup>Required</sup> <a name="encryptionSpec" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.Initializer.parameter.encryptionSpec"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpec">GoogleDialogflowEncryptionSpecEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_encryption_spec#encryption_spec GoogleDialogflowEncryptionSpec#encryption_spec}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location in which the encryptionSpec is to be initialized.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_encryption_spec#location GoogleDialogflowEncryptionSpec#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_encryption_spec#id GoogleDialogflowEncryptionSpec#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_encryption_spec#project GoogleDialogflowEncryptionSpec#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeouts">GoogleDialogflowEncryptionSpecTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_encryption_spec#timeouts GoogleDialogflowEncryptionSpec#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.putEncryptionSpec">putEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEncryptionSpec` <a name="putEncryptionSpec" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.putEncryptionSpec"></a>

```java
public void putEncryptionSpec(GoogleDialogflowEncryptionSpecEncryptionSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.putEncryptionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpec">GoogleDialogflowEncryptionSpecEncryptionSpec</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.putTimeouts"></a>

```java
public void putTimeouts(GoogleDialogflowEncryptionSpecTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeouts">GoogleDialogflowEncryptionSpecTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDialogflowEncryptionSpec resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_encryption_spec.GoogleDialogflowEncryptionSpec;

GoogleDialogflowEncryptionSpec.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_encryption_spec.GoogleDialogflowEncryptionSpec;

GoogleDialogflowEncryptionSpec.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_encryption_spec.GoogleDialogflowEncryptionSpec;

GoogleDialogflowEncryptionSpec.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_encryption_spec.GoogleDialogflowEncryptionSpec;

GoogleDialogflowEncryptionSpec.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleDialogflowEncryptionSpec.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleDialogflowEncryptionSpec resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleDialogflowEncryptionSpec to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleDialogflowEncryptionSpec that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_encryption_spec#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDialogflowEncryptionSpec to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.encryptionSpec">encryptionSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference">GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference">GoogleDialogflowEncryptionSpecTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.encryptionSpecInput">encryptionSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpec">GoogleDialogflowEncryptionSpecEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeouts">GoogleDialogflowEncryptionSpecTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `encryptionSpec`<sup>Required</sup> <a name="encryptionSpec" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.encryptionSpec"></a>

```java
public GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference getEncryptionSpec();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference">GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.timeouts"></a>

```java
public GoogleDialogflowEncryptionSpecTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference">GoogleDialogflowEncryptionSpecTimeoutsOutputReference</a>

---

##### `encryptionSpecInput`<sup>Optional</sup> <a name="encryptionSpecInput" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.encryptionSpecInput"></a>

```java
public GoogleDialogflowEncryptionSpecEncryptionSpec getEncryptionSpecInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpec">GoogleDialogflowEncryptionSpecEncryptionSpec</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.timeoutsInput"></a>

```java
public IResolvable|GoogleDialogflowEncryptionSpecTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeouts">GoogleDialogflowEncryptionSpecTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpec.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDialogflowEncryptionSpecConfig <a name="GoogleDialogflowEncryptionSpecConfig" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_encryption_spec.GoogleDialogflowEncryptionSpecConfig;

GoogleDialogflowEncryptionSpecConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .encryptionSpec(GoogleDialogflowEncryptionSpecEncryptionSpec)
    .location(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleDialogflowEncryptionSpecTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecConfig.property.encryptionSpec">encryptionSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpec">GoogleDialogflowEncryptionSpecEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location in which the encryptionSpec is to be initialized. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_encryption_spec#id GoogleDialogflowEncryptionSpec#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_encryption_spec#project GoogleDialogflowEncryptionSpec#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeouts">GoogleDialogflowEncryptionSpecTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `encryptionSpec`<sup>Required</sup> <a name="encryptionSpec" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecConfig.property.encryptionSpec"></a>

```java
public GoogleDialogflowEncryptionSpecEncryptionSpec getEncryptionSpec();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpec">GoogleDialogflowEncryptionSpecEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_encryption_spec#encryption_spec GoogleDialogflowEncryptionSpec#encryption_spec}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location in which the encryptionSpec is to be initialized.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_encryption_spec#location GoogleDialogflowEncryptionSpec#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_encryption_spec#id GoogleDialogflowEncryptionSpec#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_encryption_spec#project GoogleDialogflowEncryptionSpec#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecConfig.property.timeouts"></a>

```java
public GoogleDialogflowEncryptionSpecTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeouts">GoogleDialogflowEncryptionSpecTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_encryption_spec#timeouts GoogleDialogflowEncryptionSpec#timeouts}

---

### GoogleDialogflowEncryptionSpecEncryptionSpec <a name="GoogleDialogflowEncryptionSpecEncryptionSpec" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpec.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_encryption_spec.GoogleDialogflowEncryptionSpecEncryptionSpec;

GoogleDialogflowEncryptionSpecEncryptionSpec.builder()
    .kmsKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpec.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | The name of customer-managed encryption key that is used to secure a resource and its sub-resources. |

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpec.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

The name of customer-managed encryption key that is used to secure a resource and its sub-resources.

If empty, the resource is secured by the default Google encryption key.
Only the key in the same location as this resource is allowed to be used for encryption.
Format: projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{key}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_encryption_spec#kms_key GoogleDialogflowEncryptionSpec#kms_key}

---

### GoogleDialogflowEncryptionSpecTimeouts <a name="GoogleDialogflowEncryptionSpecTimeouts" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_encryption_spec.GoogleDialogflowEncryptionSpecTimeouts;

GoogleDialogflowEncryptionSpecTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_encryption_spec#create GoogleDialogflowEncryptionSpec#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_encryption_spec#delete GoogleDialogflowEncryptionSpec#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_encryption_spec#create GoogleDialogflowEncryptionSpec#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_encryption_spec#delete GoogleDialogflowEncryptionSpec#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference <a name="GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_encryption_spec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference;

new GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpec">GoogleDialogflowEncryptionSpecEncryptionSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.property.kmsKeyInput"></a>

```java
public java.lang.String getKmsKeyInput();
```

- *Type:* java.lang.String

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpecOutputReference.property.internalValue"></a>

```java
public GoogleDialogflowEncryptionSpecEncryptionSpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecEncryptionSpec">GoogleDialogflowEncryptionSpecEncryptionSpec</a>

---


### GoogleDialogflowEncryptionSpecTimeoutsOutputReference <a name="GoogleDialogflowEncryptionSpecTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_encryption_spec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference;

new GoogleDialogflowEncryptionSpecTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeouts">GoogleDialogflowEncryptionSpecTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleDialogflowEncryptionSpecTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDialogflowEncryptionSpec.GoogleDialogflowEncryptionSpecTimeouts">GoogleDialogflowEncryptionSpecTimeouts</a>

---



