# `googleFirebaseRemoteConfigRemoteConfig` Submodule <a name="`googleFirebaseRemoteConfigRemoteConfig` Submodule" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFirebaseRemoteConfigRemoteConfig <a name="GoogleFirebaseRemoteConfigRemoteConfig" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config google_firebase_remote_config_remote_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_remote_config_remote_config.GoogleFirebaseRemoteConfigRemoteConfig;

GoogleFirebaseRemoteConfigRemoteConfig.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .conditions(IResolvable|java.util.List<GoogleFirebaseRemoteConfigRemoteConfigConditions>)
//  .id(java.lang.String)
//  .parameterGroups(IResolvable|java.util.List<GoogleFirebaseRemoteConfigRemoteConfigParameterGroups>)
//  .parameters(IResolvable|java.util.List<GoogleFirebaseRemoteConfigRemoteConfigParameters>)
//  .project(java.lang.String)
//  .timeouts(GoogleFirebaseRemoteConfigRemoteConfigTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.Initializer.parameter.conditions">conditions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditions">GoogleFirebaseRemoteConfigRemoteConfigConditions</a>></code> | conditions block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#id GoogleFirebaseRemoteConfigRemoteConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.Initializer.parameter.parameterGroups">parameterGroups</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroups">GoogleFirebaseRemoteConfigRemoteConfigParameterGroups</a>></code> | parameter_groups block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.Initializer.parameter.parameters">parameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters">GoogleFirebaseRemoteConfigRemoteConfigParameters</a>></code> | parameters block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#project GoogleFirebaseRemoteConfigRemoteConfig#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeouts">GoogleFirebaseRemoteConfigRemoteConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.Initializer.parameter.conditions"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditions">GoogleFirebaseRemoteConfigRemoteConfigConditions</a>>

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#conditions GoogleFirebaseRemoteConfigRemoteConfig#conditions}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#id GoogleFirebaseRemoteConfigRemoteConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameterGroups`<sup>Optional</sup> <a name="parameterGroups" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.Initializer.parameter.parameterGroups"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroups">GoogleFirebaseRemoteConfigRemoteConfigParameterGroups</a>>

parameter_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#parameter_groups GoogleFirebaseRemoteConfigRemoteConfig#parameter_groups}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.Initializer.parameter.parameters"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters">GoogleFirebaseRemoteConfigRemoteConfigParameters</a>>

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#parameters GoogleFirebaseRemoteConfigRemoteConfig#parameters}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#project GoogleFirebaseRemoteConfigRemoteConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeouts">GoogleFirebaseRemoteConfigRemoteConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#timeouts GoogleFirebaseRemoteConfigRemoteConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.putConditions">putConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.putParameterGroups">putParameterGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.putParameters">putParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.resetConditions">resetConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.resetParameterGroups">resetParameterGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConditions` <a name="putConditions" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.putConditions"></a>

```java
public void putConditions(IResolvable|java.util.List<GoogleFirebaseRemoteConfigRemoteConfigConditions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.putConditions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditions">GoogleFirebaseRemoteConfigRemoteConfigConditions</a>>

---

##### `putParameterGroups` <a name="putParameterGroups" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.putParameterGroups"></a>

```java
public void putParameterGroups(IResolvable|java.util.List<GoogleFirebaseRemoteConfigRemoteConfigParameterGroups> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.putParameterGroups.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroups">GoogleFirebaseRemoteConfigRemoteConfigParameterGroups</a>>

---

##### `putParameters` <a name="putParameters" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.putParameters"></a>

```java
public void putParameters(IResolvable|java.util.List<GoogleFirebaseRemoteConfigRemoteConfigParameters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.putParameters.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters">GoogleFirebaseRemoteConfigRemoteConfigParameters</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.putTimeouts"></a>

```java
public void putTimeouts(GoogleFirebaseRemoteConfigRemoteConfigTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeouts">GoogleFirebaseRemoteConfigRemoteConfigTimeouts</a>

---

##### `resetConditions` <a name="resetConditions" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.resetConditions"></a>

```java
public void resetConditions()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.resetId"></a>

```java
public void resetId()
```

##### `resetParameterGroups` <a name="resetParameterGroups" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.resetParameterGroups"></a>

```java
public void resetParameterGroups()
```

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.resetParameters"></a>

```java
public void resetParameters()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleFirebaseRemoteConfigRemoteConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_remote_config_remote_config.GoogleFirebaseRemoteConfigRemoteConfig;

GoogleFirebaseRemoteConfigRemoteConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_remote_config_remote_config.GoogleFirebaseRemoteConfigRemoteConfig;

GoogleFirebaseRemoteConfigRemoteConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_remote_config_remote_config.GoogleFirebaseRemoteConfigRemoteConfig;

GoogleFirebaseRemoteConfigRemoteConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_remote_config_remote_config.GoogleFirebaseRemoteConfigRemoteConfig;

GoogleFirebaseRemoteConfigRemoteConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleFirebaseRemoteConfigRemoteConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleFirebaseRemoteConfigRemoteConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleFirebaseRemoteConfigRemoteConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleFirebaseRemoteConfigRemoteConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleFirebaseRemoteConfigRemoteConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList">GoogleFirebaseRemoteConfigRemoteConfigConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.parameterGroups">parameterGroups</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList">GoogleFirebaseRemoteConfigRemoteConfigParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference">GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.version">version</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList">GoogleFirebaseRemoteConfigRemoteConfigVersionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.conditionsInput">conditionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditions">GoogleFirebaseRemoteConfigRemoteConfigConditions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.parameterGroupsInput">parameterGroupsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroups">GoogleFirebaseRemoteConfigRemoteConfigParameterGroups</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.parametersInput">parametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters">GoogleFirebaseRemoteConfigRemoteConfigParameters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeouts">GoogleFirebaseRemoteConfigRemoteConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.conditions"></a>

```java
public GoogleFirebaseRemoteConfigRemoteConfigConditionsList getConditions();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList">GoogleFirebaseRemoteConfigRemoteConfigConditionsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parameterGroups`<sup>Required</sup> <a name="parameterGroups" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.parameterGroups"></a>

```java
public GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList getParameterGroups();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList</a>

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.parameters"></a>

```java
public GoogleFirebaseRemoteConfigRemoteConfigParametersList getParameters();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList">GoogleFirebaseRemoteConfigRemoteConfigParametersList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.timeouts"></a>

```java
public GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference">GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.version"></a>

```java
public GoogleFirebaseRemoteConfigRemoteConfigVersionList getVersion();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList">GoogleFirebaseRemoteConfigRemoteConfigVersionList</a>

---

##### `conditionsInput`<sup>Optional</sup> <a name="conditionsInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.conditionsInput"></a>

```java
public IResolvable|java.util.List<GoogleFirebaseRemoteConfigRemoteConfigConditions> getConditionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditions">GoogleFirebaseRemoteConfigRemoteConfigConditions</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `parameterGroupsInput`<sup>Optional</sup> <a name="parameterGroupsInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.parameterGroupsInput"></a>

```java
public IResolvable|java.util.List<GoogleFirebaseRemoteConfigRemoteConfigParameterGroups> getParameterGroupsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroups">GoogleFirebaseRemoteConfigRemoteConfigParameterGroups</a>>

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.parametersInput"></a>

```java
public IResolvable|java.util.List<GoogleFirebaseRemoteConfigRemoteConfigParameters> getParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters">GoogleFirebaseRemoteConfigRemoteConfigParameters</a>>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.timeoutsInput"></a>

```java
public IResolvable|GoogleFirebaseRemoteConfigRemoteConfigTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeouts">GoogleFirebaseRemoteConfigRemoteConfigTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFirebaseRemoteConfigRemoteConfigConditions <a name="GoogleFirebaseRemoteConfigRemoteConfigConditions" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditions.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_remote_config_remote_config.GoogleFirebaseRemoteConfigRemoteConfigConditions;

GoogleFirebaseRemoteConfigRemoteConfigConditions.builder()
    .expression(java.lang.String)
    .name(java.lang.String)
//  .tagColor(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditions.property.expression">expression</a></code> | <code>java.lang.String</code> | The logic of this condition. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditions.property.name">name</a></code> | <code>java.lang.String</code> | A non-empty and unique name of this condition. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditions.property.tagColor">tagColor</a></code> | <code>java.lang.String</code> | The color associated with this condition for display purposes in the Firebase Console. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditions.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

The logic of this condition.

See the documentation regarding
[Condition
Expressions](https://firebase.google.com/docs/remote-config/condition-reference)
for the expected syntax of this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#expression GoogleFirebaseRemoteConfigRemoteConfig#expression}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditions.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A non-empty and unique name of this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#name GoogleFirebaseRemoteConfigRemoteConfig#name}

---

##### `tagColor`<sup>Optional</sup> <a name="tagColor" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditions.property.tagColor"></a>

```java
public java.lang.String getTagColor();
```

- *Type:* java.lang.String

The color associated with this condition for display purposes in the Firebase Console.

Not specifying this value results in the Console picking an arbitrary color to associate with the condition. Possible values: ["BLUE", "BROWN", "CYAN", "DEEP_ORANGE", "GREEN", "INDIGO", "LIME", "ORANGE", "PINK", "PURPLE", "TEAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#tag_color GoogleFirebaseRemoteConfigRemoteConfig#tag_color}

---

### GoogleFirebaseRemoteConfigRemoteConfigConfig <a name="GoogleFirebaseRemoteConfigRemoteConfigConfig" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_remote_config_remote_config.GoogleFirebaseRemoteConfigRemoteConfigConfig;

GoogleFirebaseRemoteConfigRemoteConfigConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .conditions(IResolvable|java.util.List<GoogleFirebaseRemoteConfigRemoteConfigConditions>)
//  .id(java.lang.String)
//  .parameterGroups(IResolvable|java.util.List<GoogleFirebaseRemoteConfigRemoteConfigParameterGroups>)
//  .parameters(IResolvable|java.util.List<GoogleFirebaseRemoteConfigRemoteConfigParameters>)
//  .project(java.lang.String)
//  .timeouts(GoogleFirebaseRemoteConfigRemoteConfigTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.conditions">conditions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditions">GoogleFirebaseRemoteConfigRemoteConfigConditions</a>></code> | conditions block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#id GoogleFirebaseRemoteConfigRemoteConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.parameterGroups">parameterGroups</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroups">GoogleFirebaseRemoteConfigRemoteConfigParameterGroups</a>></code> | parameter_groups block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.parameters">parameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters">GoogleFirebaseRemoteConfigRemoteConfigParameters</a>></code> | parameters block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#project GoogleFirebaseRemoteConfigRemoteConfig#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeouts">GoogleFirebaseRemoteConfigRemoteConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.conditions"></a>

```java
public IResolvable|java.util.List<GoogleFirebaseRemoteConfigRemoteConfigConditions> getConditions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditions">GoogleFirebaseRemoteConfigRemoteConfigConditions</a>>

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#conditions GoogleFirebaseRemoteConfigRemoteConfig#conditions}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#id GoogleFirebaseRemoteConfigRemoteConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameterGroups`<sup>Optional</sup> <a name="parameterGroups" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.parameterGroups"></a>

```java
public IResolvable|java.util.List<GoogleFirebaseRemoteConfigRemoteConfigParameterGroups> getParameterGroups();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroups">GoogleFirebaseRemoteConfigRemoteConfigParameterGroups</a>>

parameter_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#parameter_groups GoogleFirebaseRemoteConfigRemoteConfig#parameter_groups}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.parameters"></a>

```java
public IResolvable|java.util.List<GoogleFirebaseRemoteConfigRemoteConfigParameters> getParameters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters">GoogleFirebaseRemoteConfigRemoteConfigParameters</a>>

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#parameters GoogleFirebaseRemoteConfigRemoteConfig#parameters}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#project GoogleFirebaseRemoteConfigRemoteConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConfig.property.timeouts"></a>

```java
public GoogleFirebaseRemoteConfigRemoteConfigTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeouts">GoogleFirebaseRemoteConfigRemoteConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#timeouts GoogleFirebaseRemoteConfigRemoteConfig#timeouts}

---

### GoogleFirebaseRemoteConfigRemoteConfigParameterGroups <a name="GoogleFirebaseRemoteConfigRemoteConfigParameterGroups" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroups.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_remote_config_remote_config.GoogleFirebaseRemoteConfigRemoteConfigParameterGroups;

GoogleFirebaseRemoteConfigRemoteConfigParameterGroups.builder()
    .parameterGroupName(java.lang.String)
//  .description(java.lang.String)
//  .parameters(IResolvable|java.util.List<GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroups.property.parameterGroupName">parameterGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#parameter_group_name GoogleFirebaseRemoteConfigRemoteConfig#parameter_group_name}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroups.property.description">description</a></code> | <code>java.lang.String</code> | A description for the group. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroups.property.parameters">parameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters</a>></code> | parameters block. |

---

##### `parameterGroupName`<sup>Required</sup> <a name="parameterGroupName" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroups.property.parameterGroupName"></a>

```java
public java.lang.String getParameterGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#parameter_group_name GoogleFirebaseRemoteConfigRemoteConfig#parameter_group_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroups.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description for the group.

Its length must be less than or equal to 256
characters. A description may contain any Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#description GoogleFirebaseRemoteConfigRemoteConfig#description}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroups.property.parameters"></a>

```java
public IResolvable|java.util.List<GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters> getParameters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters</a>>

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#parameters GoogleFirebaseRemoteConfigRemoteConfig#parameters}

---

### GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters <a name="GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_remote_config_remote_config.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters;

GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters.builder()
    .parameterName(java.lang.String)
//  .conditionalValues(IResolvable|java.util.List<GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues>)
//  .defaultValue(GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue)
//  .description(java.lang.String)
//  .valueType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters.property.parameterName">parameterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#parameter_name GoogleFirebaseRemoteConfigRemoteConfig#parameter_name}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters.property.conditionalValues">conditionalValues</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues</a>></code> | conditional_values block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters.property.defaultValue">defaultValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue</a></code> | default_value block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters.property.description">description</a></code> | <code>java.lang.String</code> | A description for this Parameter. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters.property.valueType">valueType</a></code> | <code>java.lang.String</code> | The data type for all values of this parameter in the current version of the template. |

---

##### `parameterName`<sup>Required</sup> <a name="parameterName" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters.property.parameterName"></a>

```java
public java.lang.String getParameterName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#parameter_name GoogleFirebaseRemoteConfigRemoteConfig#parameter_name}.

---

##### `conditionalValues`<sup>Optional</sup> <a name="conditionalValues" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters.property.conditionalValues"></a>

```java
public IResolvable|java.util.List<GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues> getConditionalValues();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues</a>>

conditional_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#conditional_values GoogleFirebaseRemoteConfigRemoteConfig#conditional_values}

---

##### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters.property.defaultValue"></a>

```java
public GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue getDefaultValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue</a>

default_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#default_value GoogleFirebaseRemoteConfigRemoteConfig#default_value}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description for this Parameter.

Its length must be less than or equal to
256 characters . A description may contain any Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#description GoogleFirebaseRemoteConfigRemoteConfig#description}

---

##### `valueType`<sup>Optional</sup> <a name="valueType" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters.property.valueType"></a>

```java
public java.lang.String getValueType();
```

- *Type:* java.lang.String

The data type for all values of this parameter in the current version of the template.

Default value: "STRING" Possible values: ["STRING", "BOOLEAN", "NUMBER", "JSON"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#value_type GoogleFirebaseRemoteConfigRemoteConfig#value_type}

---

### GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues <a name="GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_remote_config_remote_config.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues;

GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues.builder()
    .conditionName(java.lang.String)
//  .useInAppDefault(java.lang.Boolean|IResolvable)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues.property.conditionName">conditionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#condition_name GoogleFirebaseRemoteConfigRemoteConfig#condition_name}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues.property.useInAppDefault">useInAppDefault</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, the parameter is omitted from the parameter values returned to a client. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues.property.value">value</a></code> | <code>java.lang.String</code> | The string value that the parameter is set to. |

---

##### `conditionName`<sup>Required</sup> <a name="conditionName" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues.property.conditionName"></a>

```java
public java.lang.String getConditionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#condition_name GoogleFirebaseRemoteConfigRemoteConfig#condition_name}.

---

##### `useInAppDefault`<sup>Optional</sup> <a name="useInAppDefault" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues.property.useInAppDefault"></a>

```java
public java.lang.Boolean|IResolvable getUseInAppDefault();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, the parameter is omitted from the parameter values returned to a client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#use_in_app_default GoogleFirebaseRemoteConfigRemoteConfig#use_in_app_default}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The string value that the parameter is set to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#value GoogleFirebaseRemoteConfigRemoteConfig#value}

---

### GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue <a name="GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_remote_config_remote_config.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue;

GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue.builder()
//  .useInAppDefault(java.lang.Boolean|IResolvable)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue.property.useInAppDefault">useInAppDefault</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, the parameter is omitted from the parameter values returned to a client. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue.property.value">value</a></code> | <code>java.lang.String</code> | The string value that the parameter is set to. |

---

##### `useInAppDefault`<sup>Optional</sup> <a name="useInAppDefault" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue.property.useInAppDefault"></a>

```java
public java.lang.Boolean|IResolvable getUseInAppDefault();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, the parameter is omitted from the parameter values returned to a client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#use_in_app_default GoogleFirebaseRemoteConfigRemoteConfig#use_in_app_default}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The string value that the parameter is set to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#value GoogleFirebaseRemoteConfigRemoteConfig#value}

---

### GoogleFirebaseRemoteConfigRemoteConfigParameters <a name="GoogleFirebaseRemoteConfigRemoteConfigParameters" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_remote_config_remote_config.GoogleFirebaseRemoteConfigRemoteConfigParameters;

GoogleFirebaseRemoteConfigRemoteConfigParameters.builder()
    .parameterName(java.lang.String)
//  .conditionalValues(IResolvable|java.util.List<GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues>)
//  .defaultValue(GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue)
//  .description(java.lang.String)
//  .valueType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters.property.parameterName">parameterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#parameter_name GoogleFirebaseRemoteConfigRemoteConfig#parameter_name}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters.property.conditionalValues">conditionalValues</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues">GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues</a>></code> | conditional_values block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters.property.defaultValue">defaultValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue">GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue</a></code> | default_value block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters.property.description">description</a></code> | <code>java.lang.String</code> | A description for this Parameter. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters.property.valueType">valueType</a></code> | <code>java.lang.String</code> | The data type for all values of this parameter in the current version of the template. |

---

##### `parameterName`<sup>Required</sup> <a name="parameterName" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters.property.parameterName"></a>

```java
public java.lang.String getParameterName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#parameter_name GoogleFirebaseRemoteConfigRemoteConfig#parameter_name}.

---

##### `conditionalValues`<sup>Optional</sup> <a name="conditionalValues" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters.property.conditionalValues"></a>

```java
public IResolvable|java.util.List<GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues> getConditionalValues();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues">GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues</a>>

conditional_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#conditional_values GoogleFirebaseRemoteConfigRemoteConfig#conditional_values}

---

##### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters.property.defaultValue"></a>

```java
public GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue getDefaultValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue">GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue</a>

default_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#default_value GoogleFirebaseRemoteConfigRemoteConfig#default_value}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description for this Parameter.

Its length must be less than or equal to
256 characters . A description may contain any Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#description GoogleFirebaseRemoteConfigRemoteConfig#description}

---

##### `valueType`<sup>Optional</sup> <a name="valueType" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters.property.valueType"></a>

```java
public java.lang.String getValueType();
```

- *Type:* java.lang.String

The data type for all values of this parameter in the current version of the template.

Default value: "STRING" Possible values: ["STRING", "BOOLEAN", "NUMBER", "JSON"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#value_type GoogleFirebaseRemoteConfigRemoteConfig#value_type}

---

### GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues <a name="GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_remote_config_remote_config.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues;

GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues.builder()
    .conditionName(java.lang.String)
//  .useInAppDefault(java.lang.Boolean|IResolvable)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues.property.conditionName">conditionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#condition_name GoogleFirebaseRemoteConfigRemoteConfig#condition_name}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues.property.useInAppDefault">useInAppDefault</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, the parameter is omitted from the parameter values returned to a client. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues.property.value">value</a></code> | <code>java.lang.String</code> | The string value that the parameter is set to. |

---

##### `conditionName`<sup>Required</sup> <a name="conditionName" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues.property.conditionName"></a>

```java
public java.lang.String getConditionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#condition_name GoogleFirebaseRemoteConfigRemoteConfig#condition_name}.

---

##### `useInAppDefault`<sup>Optional</sup> <a name="useInAppDefault" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues.property.useInAppDefault"></a>

```java
public java.lang.Boolean|IResolvable getUseInAppDefault();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, the parameter is omitted from the parameter values returned to a client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#use_in_app_default GoogleFirebaseRemoteConfigRemoteConfig#use_in_app_default}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The string value that the parameter is set to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#value GoogleFirebaseRemoteConfigRemoteConfig#value}

---

### GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue <a name="GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_remote_config_remote_config.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue;

GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue.builder()
//  .useInAppDefault(java.lang.Boolean|IResolvable)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue.property.useInAppDefault">useInAppDefault</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, the parameter is omitted from the parameter values returned to a client. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue.property.value">value</a></code> | <code>java.lang.String</code> | The string value that the parameter is set to. |

---

##### `useInAppDefault`<sup>Optional</sup> <a name="useInAppDefault" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue.property.useInAppDefault"></a>

```java
public java.lang.Boolean|IResolvable getUseInAppDefault();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, the parameter is omitted from the parameter values returned to a client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#use_in_app_default GoogleFirebaseRemoteConfigRemoteConfig#use_in_app_default}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The string value that the parameter is set to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#value GoogleFirebaseRemoteConfigRemoteConfig#value}

---

### GoogleFirebaseRemoteConfigRemoteConfigTimeouts <a name="GoogleFirebaseRemoteConfigRemoteConfigTimeouts" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_remote_config_remote_config.GoogleFirebaseRemoteConfigRemoteConfigTimeouts;

GoogleFirebaseRemoteConfigRemoteConfigTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#create GoogleFirebaseRemoteConfigRemoteConfig#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#delete GoogleFirebaseRemoteConfigRemoteConfig#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#update GoogleFirebaseRemoteConfigRemoteConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#create GoogleFirebaseRemoteConfigRemoteConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#delete GoogleFirebaseRemoteConfigRemoteConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_firebase_remote_config_remote_config#update GoogleFirebaseRemoteConfigRemoteConfig#update}.

---

### GoogleFirebaseRemoteConfigRemoteConfigVersion <a name="GoogleFirebaseRemoteConfigRemoteConfigVersion" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersion.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_remote_config_remote_config.GoogleFirebaseRemoteConfigRemoteConfigVersion;

GoogleFirebaseRemoteConfigRemoteConfigVersion.builder()
    .build();
```


### GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUser <a name="GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUser" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUser.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_remote_config_remote_config.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUser;

GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUser.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### GoogleFirebaseRemoteConfigRemoteConfigConditionsList <a name="GoogleFirebaseRemoteConfigRemoteConfigConditionsList" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_remote_config_remote_config.GoogleFirebaseRemoteConfigRemoteConfigConditionsList;

new GoogleFirebaseRemoteConfigRemoteConfigConditionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.get"></a>

```java
public GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditions">GoogleFirebaseRemoteConfigRemoteConfigConditions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleFirebaseRemoteConfigRemoteConfigConditions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditions">GoogleFirebaseRemoteConfigRemoteConfigConditions</a>>

---


### GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference <a name="GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_remote_config_remote_config.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference;

new GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.resetTagColor">resetTagColor</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTagColor` <a name="resetTagColor" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.resetTagColor"></a>

```java
public void resetTagColor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.tagColorInput">tagColorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.tagColor">tagColor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditions">GoogleFirebaseRemoteConfigRemoteConfigConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagColorInput`<sup>Optional</sup> <a name="tagColorInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.tagColorInput"></a>

```java
public java.lang.String getTagColorInput();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tagColor`<sup>Required</sup> <a name="tagColor" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.tagColor"></a>

```java
public java.lang.String getTagColor();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditionsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleFirebaseRemoteConfigRemoteConfigConditions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigConditions">GoogleFirebaseRemoteConfigRemoteConfigConditions</a>

---


### GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList <a name="GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_remote_config_remote_config.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList;

new GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.get"></a>

```java
public GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroups">GoogleFirebaseRemoteConfigRemoteConfigParameterGroups</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleFirebaseRemoteConfigRemoteConfigParameterGroups> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroups">GoogleFirebaseRemoteConfigRemoteConfigParameterGroups</a>>

---


### GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference <a name="GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_remote_config_remote_config.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference;

new GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.putParameters">putParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.resetParameters">resetParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putParameters` <a name="putParameters" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.putParameters"></a>

```java
public void putParameters(IResolvable|java.util.List<GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.putParameters.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.resetParameters"></a>

```java
public void resetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.parameterGroupNameInput">parameterGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.parametersInput">parametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.parameterGroupName">parameterGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroups">GoogleFirebaseRemoteConfigRemoteConfigParameterGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.parameters"></a>

```java
public GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList getParameters();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `parameterGroupNameInput`<sup>Optional</sup> <a name="parameterGroupNameInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.parameterGroupNameInput"></a>

```java
public java.lang.String getParameterGroupNameInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.parametersInput"></a>

```java
public IResolvable|java.util.List<GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters> getParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters</a>>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `parameterGroupName`<sup>Required</sup> <a name="parameterGroupName" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.parameterGroupName"></a>

```java
public java.lang.String getParameterGroupName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleFirebaseRemoteConfigRemoteConfigParameterGroups getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroups">GoogleFirebaseRemoteConfigRemoteConfigParameterGroups</a>

---


### GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList <a name="GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_remote_config_remote_config.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList;

new GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.get"></a>

```java
public GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues</a>>

---


### GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference <a name="GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_remote_config_remote_config.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference;

new GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.resetUseInAppDefault">resetUseInAppDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUseInAppDefault` <a name="resetUseInAppDefault" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.resetUseInAppDefault"></a>

```java
public void resetUseInAppDefault()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.conditionNameInput">conditionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.useInAppDefaultInput">useInAppDefaultInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.conditionName">conditionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.useInAppDefault">useInAppDefault</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `conditionNameInput`<sup>Optional</sup> <a name="conditionNameInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.conditionNameInput"></a>

```java
public java.lang.String getConditionNameInput();
```

- *Type:* java.lang.String

---

##### `useInAppDefaultInput`<sup>Optional</sup> <a name="useInAppDefaultInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.useInAppDefaultInput"></a>

```java
public java.lang.Boolean|IResolvable getUseInAppDefaultInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `conditionName`<sup>Required</sup> <a name="conditionName" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.conditionName"></a>

```java
public java.lang.String getConditionName();
```

- *Type:* java.lang.String

---

##### `useInAppDefault`<sup>Required</sup> <a name="useInAppDefault" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.useInAppDefault"></a>

```java
public java.lang.Boolean|IResolvable getUseInAppDefault();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues</a>

---


### GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference <a name="GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_remote_config_remote_config.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference;

new GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.resetUseInAppDefault">resetUseInAppDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUseInAppDefault` <a name="resetUseInAppDefault" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.resetUseInAppDefault"></a>

```java
public void resetUseInAppDefault()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.useInAppDefaultInput">useInAppDefaultInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.useInAppDefault">useInAppDefault</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `useInAppDefaultInput`<sup>Optional</sup> <a name="useInAppDefaultInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.useInAppDefaultInput"></a>

```java
public java.lang.Boolean|IResolvable getUseInAppDefaultInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `useInAppDefault`<sup>Required</sup> <a name="useInAppDefault" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.useInAppDefault"></a>

```java
public java.lang.Boolean|IResolvable getUseInAppDefault();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference.property.internalValue"></a>

```java
public GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue</a>

---


### GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList <a name="GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_remote_config_remote_config.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList;

new GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.get"></a>

```java
public GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters</a>>

---


### GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference <a name="GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_remote_config_remote_config.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference;

new GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.putConditionalValues">putConditionalValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.putDefaultValue">putDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resetConditionalValues">resetConditionalValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resetDefaultValue">resetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resetValueType">resetValueType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConditionalValues` <a name="putConditionalValues" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.putConditionalValues"></a>

```java
public void putConditionalValues(IResolvable|java.util.List<GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.putConditionalValues.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues</a>>

---

##### `putDefaultValue` <a name="putDefaultValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.putDefaultValue"></a>

```java
public void putDefaultValue(GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.putDefaultValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue</a>

---

##### `resetConditionalValues` <a name="resetConditionalValues" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resetConditionalValues"></a>

```java
public void resetConditionalValues()
```

##### `resetDefaultValue` <a name="resetDefaultValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resetDefaultValue"></a>

```java
public void resetDefaultValue()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetValueType` <a name="resetValueType" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.resetValueType"></a>

```java
public void resetValueType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.conditionalValues">conditionalValues</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.defaultValue">defaultValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.conditionalValuesInput">conditionalValuesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.defaultValueInput">defaultValueInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.parameterNameInput">parameterNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.valueTypeInput">valueTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.parameterName">parameterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.valueType">valueType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `conditionalValues`<sup>Required</sup> <a name="conditionalValues" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.conditionalValues"></a>

```java
public GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList getConditionalValues();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValuesList</a>

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.defaultValue"></a>

```java
public GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference getDefaultValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValueOutputReference</a>

---

##### `conditionalValuesInput`<sup>Optional</sup> <a name="conditionalValuesInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.conditionalValuesInput"></a>

```java
public IResolvable|java.util.List<GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues> getConditionalValuesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersConditionalValues</a>>

---

##### `defaultValueInput`<sup>Optional</sup> <a name="defaultValueInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.defaultValueInput"></a>

```java
public GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue getDefaultValueInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersDefaultValue</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `parameterNameInput`<sup>Optional</sup> <a name="parameterNameInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.parameterNameInput"></a>

```java
public java.lang.String getParameterNameInput();
```

- *Type:* java.lang.String

---

##### `valueTypeInput`<sup>Optional</sup> <a name="valueTypeInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.valueTypeInput"></a>

```java
public java.lang.String getValueTypeInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `parameterName`<sup>Required</sup> <a name="parameterName" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.parameterName"></a>

```java
public java.lang.String getParameterName();
```

- *Type:* java.lang.String

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.valueType"></a>

```java
public java.lang.String getValueType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters">GoogleFirebaseRemoteConfigRemoteConfigParameterGroupsParameters</a>

---


### GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList <a name="GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_remote_config_remote_config.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList;

new GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.get"></a>

```java
public GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues">GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues">GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues</a>>

---


### GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference <a name="GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_remote_config_remote_config.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference;

new GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.resetUseInAppDefault">resetUseInAppDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUseInAppDefault` <a name="resetUseInAppDefault" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.resetUseInAppDefault"></a>

```java
public void resetUseInAppDefault()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.conditionNameInput">conditionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.useInAppDefaultInput">useInAppDefaultInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.conditionName">conditionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.useInAppDefault">useInAppDefault</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues">GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `conditionNameInput`<sup>Optional</sup> <a name="conditionNameInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.conditionNameInput"></a>

```java
public java.lang.String getConditionNameInput();
```

- *Type:* java.lang.String

---

##### `useInAppDefaultInput`<sup>Optional</sup> <a name="useInAppDefaultInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.useInAppDefaultInput"></a>

```java
public java.lang.Boolean|IResolvable getUseInAppDefaultInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `conditionName`<sup>Required</sup> <a name="conditionName" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.conditionName"></a>

```java
public java.lang.String getConditionName();
```

- *Type:* java.lang.String

---

##### `useInAppDefault`<sup>Required</sup> <a name="useInAppDefault" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.useInAppDefault"></a>

```java
public java.lang.Boolean|IResolvable getUseInAppDefault();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues">GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues</a>

---


### GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference <a name="GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_remote_config_remote_config.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference;

new GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.resetUseInAppDefault">resetUseInAppDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUseInAppDefault` <a name="resetUseInAppDefault" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.resetUseInAppDefault"></a>

```java
public void resetUseInAppDefault()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.useInAppDefaultInput">useInAppDefaultInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.useInAppDefault">useInAppDefault</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue">GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `useInAppDefaultInput`<sup>Optional</sup> <a name="useInAppDefaultInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.useInAppDefaultInput"></a>

```java
public java.lang.Boolean|IResolvable getUseInAppDefaultInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `useInAppDefault`<sup>Required</sup> <a name="useInAppDefault" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.useInAppDefault"></a>

```java
public java.lang.Boolean|IResolvable getUseInAppDefault();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference.property.internalValue"></a>

```java
public GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue">GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue</a>

---


### GoogleFirebaseRemoteConfigRemoteConfigParametersList <a name="GoogleFirebaseRemoteConfigRemoteConfigParametersList" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_remote_config_remote_config.GoogleFirebaseRemoteConfigRemoteConfigParametersList;

new GoogleFirebaseRemoteConfigRemoteConfigParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.get"></a>

```java
public GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters">GoogleFirebaseRemoteConfigRemoteConfigParameters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleFirebaseRemoteConfigRemoteConfigParameters> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters">GoogleFirebaseRemoteConfigRemoteConfigParameters</a>>

---


### GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference <a name="GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_remote_config_remote_config.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference;

new GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.putConditionalValues">putConditionalValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.putDefaultValue">putDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.resetConditionalValues">resetConditionalValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.resetDefaultValue">resetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.resetValueType">resetValueType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConditionalValues` <a name="putConditionalValues" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.putConditionalValues"></a>

```java
public void putConditionalValues(IResolvable|java.util.List<GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.putConditionalValues.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues">GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues</a>>

---

##### `putDefaultValue` <a name="putDefaultValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.putDefaultValue"></a>

```java
public void putDefaultValue(GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.putDefaultValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue">GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue</a>

---

##### `resetConditionalValues` <a name="resetConditionalValues" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.resetConditionalValues"></a>

```java
public void resetConditionalValues()
```

##### `resetDefaultValue` <a name="resetDefaultValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.resetDefaultValue"></a>

```java
public void resetDefaultValue()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetValueType` <a name="resetValueType" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.resetValueType"></a>

```java
public void resetValueType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.conditionalValues">conditionalValues</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList">GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.defaultValue">defaultValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference">GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.conditionalValuesInput">conditionalValuesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues">GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.defaultValueInput">defaultValueInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue">GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.parameterNameInput">parameterNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.valueTypeInput">valueTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.parameterName">parameterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.valueType">valueType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters">GoogleFirebaseRemoteConfigRemoteConfigParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `conditionalValues`<sup>Required</sup> <a name="conditionalValues" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.conditionalValues"></a>

```java
public GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList getConditionalValues();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList">GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValuesList</a>

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.defaultValue"></a>

```java
public GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference getDefaultValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference">GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValueOutputReference</a>

---

##### `conditionalValuesInput`<sup>Optional</sup> <a name="conditionalValuesInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.conditionalValuesInput"></a>

```java
public IResolvable|java.util.List<GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues> getConditionalValuesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues">GoogleFirebaseRemoteConfigRemoteConfigParametersConditionalValues</a>>

---

##### `defaultValueInput`<sup>Optional</sup> <a name="defaultValueInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.defaultValueInput"></a>

```java
public GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue getDefaultValueInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue">GoogleFirebaseRemoteConfigRemoteConfigParametersDefaultValue</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `parameterNameInput`<sup>Optional</sup> <a name="parameterNameInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.parameterNameInput"></a>

```java
public java.lang.String getParameterNameInput();
```

- *Type:* java.lang.String

---

##### `valueTypeInput`<sup>Optional</sup> <a name="valueTypeInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.valueTypeInput"></a>

```java
public java.lang.String getValueTypeInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `parameterName`<sup>Required</sup> <a name="parameterName" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.parameterName"></a>

```java
public java.lang.String getParameterName();
```

- *Type:* java.lang.String

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.valueType"></a>

```java
public java.lang.String getValueType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleFirebaseRemoteConfigRemoteConfigParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigParameters">GoogleFirebaseRemoteConfigRemoteConfigParameters</a>

---


### GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference <a name="GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_remote_config_remote_config.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference;

new GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeouts">GoogleFirebaseRemoteConfigRemoteConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleFirebaseRemoteConfigRemoteConfigTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigTimeouts">GoogleFirebaseRemoteConfigRemoteConfigTimeouts</a>

---


### GoogleFirebaseRemoteConfigRemoteConfigVersionList <a name="GoogleFirebaseRemoteConfigRemoteConfigVersionList" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_remote_config_remote_config.GoogleFirebaseRemoteConfigRemoteConfigVersionList;

new GoogleFirebaseRemoteConfigRemoteConfigVersionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.get"></a>

```java
public GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference <a name="GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_remote_config_remote_config.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference;

new GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.isLegacy">isLegacy</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.rollbackSource">rollbackSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.updateOrigin">updateOrigin</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.updateType">updateType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.updateUser">updateUser</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList">GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.versionNumber">versionNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersion">GoogleFirebaseRemoteConfigRemoteConfigVersion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isLegacy`<sup>Required</sup> <a name="isLegacy" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.isLegacy"></a>

```java
public IResolvable getIsLegacy();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `rollbackSource`<sup>Required</sup> <a name="rollbackSource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.rollbackSource"></a>

```java
public java.lang.String getRollbackSource();
```

- *Type:* java.lang.String

---

##### `updateOrigin`<sup>Required</sup> <a name="updateOrigin" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.updateOrigin"></a>

```java
public java.lang.String getUpdateOrigin();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `updateType`<sup>Required</sup> <a name="updateType" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.updateType"></a>

```java
public java.lang.String getUpdateType();
```

- *Type:* java.lang.String

---

##### `updateUser`<sup>Required</sup> <a name="updateUser" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.updateUser"></a>

```java
public GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList getUpdateUser();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList">GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList</a>

---

##### `versionNumber`<sup>Required</sup> <a name="versionNumber" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.versionNumber"></a>

```java
public java.lang.String getVersionNumber();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionOutputReference.property.internalValue"></a>

```java
public GoogleFirebaseRemoteConfigRemoteConfigVersion getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersion">GoogleFirebaseRemoteConfigRemoteConfigVersion</a>

---


### GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList <a name="GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_remote_config_remote_config.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList;

new GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.get"></a>

```java
public GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference <a name="GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_remote_config_remote_config.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference;

new GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.imageUrl">imageUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUser">GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUser</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `imageUrl`<sup>Required</sup> <a name="imageUrl" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.imageUrl"></a>

```java
public java.lang.String getImageUrl();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUserOutputReference.property.internalValue"></a>

```java
public GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUser getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseRemoteConfigRemoteConfig.GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUser">GoogleFirebaseRemoteConfigRemoteConfigVersionUpdateUser</a>

---



