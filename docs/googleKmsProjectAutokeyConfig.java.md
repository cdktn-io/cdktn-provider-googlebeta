# `googleKmsProjectAutokeyConfig` Submodule <a name="`googleKmsProjectAutokeyConfig` Submodule" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleKmsProjectAutokeyConfig <a name="GoogleKmsProjectAutokeyConfig" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_kms_project_autokey_config google_kms_project_autokey_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_kms_project_autokey_config.GoogleKmsProjectAutokeyConfig;

GoogleKmsProjectAutokeyConfig.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .keyProjectResolutionMode(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleKmsProjectAutokeyConfigTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_kms_project_autokey_config#id GoogleKmsProjectAutokeyConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.Initializer.parameter.keyProjectResolutionMode">keyProjectResolutionMode</a></code> | <code>java.lang.String</code> | How Autokey determines which project to use when provisioning CMEK keys. Possible values: ["RESOURCE_PROJECT", "DISABLED"]. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_kms_project_autokey_config#project GoogleKmsProjectAutokeyConfig#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeouts">GoogleKmsProjectAutokeyConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_kms_project_autokey_config#deletion_policy GoogleKmsProjectAutokeyConfig#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_kms_project_autokey_config#id GoogleKmsProjectAutokeyConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keyProjectResolutionMode`<sup>Optional</sup> <a name="keyProjectResolutionMode" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.Initializer.parameter.keyProjectResolutionMode"></a>

- *Type:* java.lang.String

How Autokey determines which project to use when provisioning CMEK keys. Possible values: ["RESOURCE_PROJECT", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_kms_project_autokey_config#key_project_resolution_mode GoogleKmsProjectAutokeyConfig#key_project_resolution_mode}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_kms_project_autokey_config#project GoogleKmsProjectAutokeyConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeouts">GoogleKmsProjectAutokeyConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_kms_project_autokey_config#timeouts GoogleKmsProjectAutokeyConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.resetKeyProjectResolutionMode">resetKeyProjectResolutionMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.putTimeouts"></a>

```java
public void putTimeouts(GoogleKmsProjectAutokeyConfigTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeouts">GoogleKmsProjectAutokeyConfigTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.resetId"></a>

```java
public void resetId()
```

##### `resetKeyProjectResolutionMode` <a name="resetKeyProjectResolutionMode" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.resetKeyProjectResolutionMode"></a>

```java
public void resetKeyProjectResolutionMode()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleKmsProjectAutokeyConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_kms_project_autokey_config.GoogleKmsProjectAutokeyConfig;

GoogleKmsProjectAutokeyConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_kms_project_autokey_config.GoogleKmsProjectAutokeyConfig;

GoogleKmsProjectAutokeyConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_kms_project_autokey_config.GoogleKmsProjectAutokeyConfig;

GoogleKmsProjectAutokeyConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_kms_project_autokey_config.GoogleKmsProjectAutokeyConfig;

GoogleKmsProjectAutokeyConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleKmsProjectAutokeyConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleKmsProjectAutokeyConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleKmsProjectAutokeyConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleKmsProjectAutokeyConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_kms_project_autokey_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleKmsProjectAutokeyConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference">GoogleKmsProjectAutokeyConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.keyProjectResolutionModeInput">keyProjectResolutionModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeouts">GoogleKmsProjectAutokeyConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.keyProjectResolutionMode">keyProjectResolutionMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.timeouts"></a>

```java
public GoogleKmsProjectAutokeyConfigTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference">GoogleKmsProjectAutokeyConfigTimeoutsOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `keyProjectResolutionModeInput`<sup>Optional</sup> <a name="keyProjectResolutionModeInput" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.keyProjectResolutionModeInput"></a>

```java
public java.lang.String getKeyProjectResolutionModeInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.timeoutsInput"></a>

```java
public IResolvable|GoogleKmsProjectAutokeyConfigTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeouts">GoogleKmsProjectAutokeyConfigTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `keyProjectResolutionMode`<sup>Required</sup> <a name="keyProjectResolutionMode" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.keyProjectResolutionMode"></a>

```java
public java.lang.String getKeyProjectResolutionMode();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleKmsProjectAutokeyConfigConfig <a name="GoogleKmsProjectAutokeyConfigConfig" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_kms_project_autokey_config.GoogleKmsProjectAutokeyConfigConfig;

GoogleKmsProjectAutokeyConfigConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .keyProjectResolutionMode(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleKmsProjectAutokeyConfigTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_kms_project_autokey_config#id GoogleKmsProjectAutokeyConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigConfig.property.keyProjectResolutionMode">keyProjectResolutionMode</a></code> | <code>java.lang.String</code> | How Autokey determines which project to use when provisioning CMEK keys. Possible values: ["RESOURCE_PROJECT", "DISABLED"]. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_kms_project_autokey_config#project GoogleKmsProjectAutokeyConfig#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeouts">GoogleKmsProjectAutokeyConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_kms_project_autokey_config#deletion_policy GoogleKmsProjectAutokeyConfig#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_kms_project_autokey_config#id GoogleKmsProjectAutokeyConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keyProjectResolutionMode`<sup>Optional</sup> <a name="keyProjectResolutionMode" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigConfig.property.keyProjectResolutionMode"></a>

```java
public java.lang.String getKeyProjectResolutionMode();
```

- *Type:* java.lang.String

How Autokey determines which project to use when provisioning CMEK keys. Possible values: ["RESOURCE_PROJECT", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_kms_project_autokey_config#key_project_resolution_mode GoogleKmsProjectAutokeyConfig#key_project_resolution_mode}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_kms_project_autokey_config#project GoogleKmsProjectAutokeyConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigConfig.property.timeouts"></a>

```java
public GoogleKmsProjectAutokeyConfigTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeouts">GoogleKmsProjectAutokeyConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_kms_project_autokey_config#timeouts GoogleKmsProjectAutokeyConfig#timeouts}

---

### GoogleKmsProjectAutokeyConfigTimeouts <a name="GoogleKmsProjectAutokeyConfigTimeouts" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_kms_project_autokey_config.GoogleKmsProjectAutokeyConfigTimeouts;

GoogleKmsProjectAutokeyConfigTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_kms_project_autokey_config#create GoogleKmsProjectAutokeyConfig#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_kms_project_autokey_config#delete GoogleKmsProjectAutokeyConfig#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_kms_project_autokey_config#update GoogleKmsProjectAutokeyConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_kms_project_autokey_config#create GoogleKmsProjectAutokeyConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_kms_project_autokey_config#delete GoogleKmsProjectAutokeyConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_kms_project_autokey_config#update GoogleKmsProjectAutokeyConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleKmsProjectAutokeyConfigTimeoutsOutputReference <a name="GoogleKmsProjectAutokeyConfigTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_kms_project_autokey_config.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference;

new GoogleKmsProjectAutokeyConfigTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeouts">GoogleKmsProjectAutokeyConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleKmsProjectAutokeyConfigTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleKmsProjectAutokeyConfig.GoogleKmsProjectAutokeyConfigTimeouts">GoogleKmsProjectAutokeyConfigTimeouts</a>

---



