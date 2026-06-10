# `googleCesDeployment` Submodule <a name="`googleCesDeployment` Submodule" id="@cdktn/provider-google-beta.googleCesDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCesDeployment <a name="GoogleCesDeployment" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_deployment google_ces_deployment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_deployment.GoogleCesDeployment;

GoogleCesDeployment.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .app(java.lang.String)
    .appVersion(java.lang.String)
    .channelProfile(GoogleCesDeploymentChannelProfile)
    .displayName(java.lang.String)
    .location(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleCesDeploymentTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer.parameter.app">app</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer.parameter.appVersion">appVersion</a></code> | <code>java.lang.String</code> | The resource name of the app version to deploy. Format: projects/{project}/locations/{location}/apps/{app}/versions/{version}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer.parameter.channelProfile">channelProfile</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfile">GoogleCesDeploymentChannelProfile</a></code> | channel_profile block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Display name of the deployment. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_deployment#id GoogleCesDeployment#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_deployment#project GoogleCesDeployment#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeouts">GoogleCesDeploymentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer.parameter.app"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_deployment#app GoogleCesDeployment#app}

---

##### `appVersion`<sup>Required</sup> <a name="appVersion" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer.parameter.appVersion"></a>

- *Type:* java.lang.String

The resource name of the app version to deploy. Format: projects/{project}/locations/{location}/apps/{app}/versions/{version}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_deployment#app_version GoogleCesDeployment#app_version}

---

##### `channelProfile`<sup>Required</sup> <a name="channelProfile" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer.parameter.channelProfile"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfile">GoogleCesDeploymentChannelProfile</a>

channel_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_deployment#channel_profile GoogleCesDeployment#channel_profile}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Display name of the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_deployment#display_name GoogleCesDeployment#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_deployment#location GoogleCesDeployment#location}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_deployment#deletion_policy GoogleCesDeployment#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_deployment#id GoogleCesDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_deployment#project GoogleCesDeployment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeouts">GoogleCesDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_deployment#timeouts GoogleCesDeployment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.putChannelProfile">putChannelProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putChannelProfile` <a name="putChannelProfile" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.putChannelProfile"></a>

```java
public void putChannelProfile(GoogleCesDeploymentChannelProfile value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.putChannelProfile.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfile">GoogleCesDeploymentChannelProfile</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.putTimeouts"></a>

```java
public void putTimeouts(GoogleCesDeploymentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeouts">GoogleCesDeploymentTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleCesDeployment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_ces_deployment.GoogleCesDeployment;

GoogleCesDeployment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_ces_deployment.GoogleCesDeployment;

GoogleCesDeployment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_ces_deployment.GoogleCesDeployment;

GoogleCesDeployment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_ces_deployment.GoogleCesDeployment;

GoogleCesDeployment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleCesDeployment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleCesDeployment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleCesDeployment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleCesDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleCesDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.channelProfile">channelProfile</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference">GoogleCesDeploymentChannelProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference">GoogleCesDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.appInput">appInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.appVersionInput">appVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.channelProfileInput">channelProfileInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfile">GoogleCesDeploymentChannelProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeouts">GoogleCesDeploymentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.app">app</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.appVersion">appVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `channelProfile`<sup>Required</sup> <a name="channelProfile" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.channelProfile"></a>

```java
public GoogleCesDeploymentChannelProfileOutputReference getChannelProfile();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference">GoogleCesDeploymentChannelProfileOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.timeouts"></a>

```java
public GoogleCesDeploymentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference">GoogleCesDeploymentTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `appInput`<sup>Optional</sup> <a name="appInput" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.appInput"></a>

```java
public java.lang.String getAppInput();
```

- *Type:* java.lang.String

---

##### `appVersionInput`<sup>Optional</sup> <a name="appVersionInput" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.appVersionInput"></a>

```java
public java.lang.String getAppVersionInput();
```

- *Type:* java.lang.String

---

##### `channelProfileInput`<sup>Optional</sup> <a name="channelProfileInput" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.channelProfileInput"></a>

```java
public GoogleCesDeploymentChannelProfile getChannelProfileInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfile">GoogleCesDeploymentChannelProfile</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.timeoutsInput"></a>

```java
public IResolvable|GoogleCesDeploymentTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeouts">GoogleCesDeploymentTimeouts</a>

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.app"></a>

```java
public java.lang.String getApp();
```

- *Type:* java.lang.String

---

##### `appVersion`<sup>Required</sup> <a name="appVersion" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.appVersion"></a>

```java
public java.lang.String getAppVersion();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCesDeploymentChannelProfile <a name="GoogleCesDeploymentChannelProfile" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfile.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_deployment.GoogleCesDeploymentChannelProfile;

GoogleCesDeploymentChannelProfile.builder()
//  .channelType(java.lang.String)
//  .disableBargeInControl(java.lang.Boolean|IResolvable)
//  .disableDtmf(java.lang.Boolean|IResolvable)
//  .personaProperty(GoogleCesDeploymentChannelProfilePersonaProperty)
//  .profileId(java.lang.String)
//  .webWidgetConfig(GoogleCesDeploymentChannelProfileWebWidgetConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfile.property.channelType">channelType</a></code> | <code>java.lang.String</code> | The type of the channel profile. Possible values: UNKNOWN WEB_UI API TWILIO GOOGLE_TELEPHONY_PLATFORM CONTACT_CENTER_AS_A_SERVICE FIVE9 CONTACT_CENTER_INTEGRATION. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfile.property.disableBargeInControl">disableBargeInControl</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to disable user barge-in control in the conversation. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfile.property.disableDtmf">disableDtmf</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to disable DTMF (dual-tone multi-frequency). |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfile.property.personaProperty">personaProperty</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaProperty">GoogleCesDeploymentChannelProfilePersonaProperty</a></code> | persona_property block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfile.property.profileId">profileId</a></code> | <code>java.lang.String</code> | The unique identifier of the channel profile. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfile.property.webWidgetConfig">webWidgetConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfig">GoogleCesDeploymentChannelProfileWebWidgetConfig</a></code> | web_widget_config block. |

---

##### `channelType`<sup>Optional</sup> <a name="channelType" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfile.property.channelType"></a>

```java
public java.lang.String getChannelType();
```

- *Type:* java.lang.String

The type of the channel profile. Possible values: UNKNOWN WEB_UI API TWILIO GOOGLE_TELEPHONY_PLATFORM CONTACT_CENTER_AS_A_SERVICE FIVE9 CONTACT_CENTER_INTEGRATION.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_deployment#channel_type GoogleCesDeployment#channel_type}

---

##### `disableBargeInControl`<sup>Optional</sup> <a name="disableBargeInControl" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfile.property.disableBargeInControl"></a>

```java
public java.lang.Boolean|IResolvable getDisableBargeInControl();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to disable user barge-in control in the conversation.

* **true**: User interruptions are disabled while the agent is speaking.
* **false**: The agent retains automatic control over when the user can
  interrupt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_deployment#disable_barge_in_control GoogleCesDeployment#disable_barge_in_control}

---

##### `disableDtmf`<sup>Optional</sup> <a name="disableDtmf" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfile.property.disableDtmf"></a>

```java
public java.lang.Boolean|IResolvable getDisableDtmf();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to disable DTMF (dual-tone multi-frequency).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_deployment#disable_dtmf GoogleCesDeployment#disable_dtmf}

---

##### `personaProperty`<sup>Optional</sup> <a name="personaProperty" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfile.property.personaProperty"></a>

```java
public GoogleCesDeploymentChannelProfilePersonaProperty getPersonaProperty();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaProperty">GoogleCesDeploymentChannelProfilePersonaProperty</a>

persona_property block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_deployment#persona_property GoogleCesDeployment#persona_property}

---

##### `profileId`<sup>Optional</sup> <a name="profileId" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfile.property.profileId"></a>

```java
public java.lang.String getProfileId();
```

- *Type:* java.lang.String

The unique identifier of the channel profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_deployment#profile_id GoogleCesDeployment#profile_id}

---

##### `webWidgetConfig`<sup>Optional</sup> <a name="webWidgetConfig" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfile.property.webWidgetConfig"></a>

```java
public GoogleCesDeploymentChannelProfileWebWidgetConfig getWebWidgetConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfig">GoogleCesDeploymentChannelProfileWebWidgetConfig</a>

web_widget_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_deployment#web_widget_config GoogleCesDeployment#web_widget_config}

---

### GoogleCesDeploymentChannelProfilePersonaProperty <a name="GoogleCesDeploymentChannelProfilePersonaProperty" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaProperty"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaProperty.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_deployment.GoogleCesDeploymentChannelProfilePersonaProperty;

GoogleCesDeploymentChannelProfilePersonaProperty.builder()
//  .persona(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaProperty.property.persona">persona</a></code> | <code>java.lang.String</code> | The persona of the channel. Possible values: UNKNOWN CONCISE CHATTY. |

---

##### `persona`<sup>Optional</sup> <a name="persona" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaProperty.property.persona"></a>

```java
public java.lang.String getPersona();
```

- *Type:* java.lang.String

The persona of the channel. Possible values: UNKNOWN CONCISE CHATTY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_deployment#persona GoogleCesDeployment#persona}

---

### GoogleCesDeploymentChannelProfileWebWidgetConfig <a name="GoogleCesDeploymentChannelProfileWebWidgetConfig" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_deployment.GoogleCesDeploymentChannelProfileWebWidgetConfig;

GoogleCesDeploymentChannelProfileWebWidgetConfig.builder()
//  .modality(java.lang.String)
//  .securitySettings(GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettings)
//  .theme(java.lang.String)
//  .webWidgetTitle(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfig.property.modality">modality</a></code> | <code>java.lang.String</code> | The modality of the web widget. Possible values: MODALITY_UNSPECIFIED CHAT_AND_VOICE VOICE_ONLY CHAT_ONLY CHAT_VOICE_AND_VIDEO. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfig.property.securitySettings">securitySettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettings">GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettings</a></code> | security_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfig.property.theme">theme</a></code> | <code>java.lang.String</code> | The theme of the web widget. Possible values: THEME_UNSPECIFIED LIGHT DARK. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfig.property.webWidgetTitle">webWidgetTitle</a></code> | <code>java.lang.String</code> | The title of the web widget. |

---

##### `modality`<sup>Optional</sup> <a name="modality" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfig.property.modality"></a>

```java
public java.lang.String getModality();
```

- *Type:* java.lang.String

The modality of the web widget. Possible values: MODALITY_UNSPECIFIED CHAT_AND_VOICE VOICE_ONLY CHAT_ONLY CHAT_VOICE_AND_VIDEO.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_deployment#modality GoogleCesDeployment#modality}

---

##### `securitySettings`<sup>Optional</sup> <a name="securitySettings" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfig.property.securitySettings"></a>

```java
public GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettings getSecuritySettings();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettings">GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettings</a>

security_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_deployment#security_settings GoogleCesDeployment#security_settings}

---

##### `theme`<sup>Optional</sup> <a name="theme" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfig.property.theme"></a>

```java
public java.lang.String getTheme();
```

- *Type:* java.lang.String

The theme of the web widget. Possible values: THEME_UNSPECIFIED LIGHT DARK.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_deployment#theme GoogleCesDeployment#theme}

---

##### `webWidgetTitle`<sup>Optional</sup> <a name="webWidgetTitle" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfig.property.webWidgetTitle"></a>

```java
public java.lang.String getWebWidgetTitle();
```

- *Type:* java.lang.String

The title of the web widget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_deployment#web_widget_title GoogleCesDeployment#web_widget_title}

---

### GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettings <a name="GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettings" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettings.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_deployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettings;

GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettings.builder()
//  .allowedOrigins(java.util.List<java.lang.String>)
//  .enableOriginCheck(java.lang.Boolean|IResolvable)
//  .enablePublicAccess(java.lang.Boolean|IResolvable)
//  .enableRecaptcha(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettings.property.allowedOrigins">allowedOrigins</a></code> | <code>java.util.List<java.lang.String></code> | The origins that are allowed to host the web widget. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettings.property.enableOriginCheck">enableOriginCheck</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether origin check for the web widget is enabled. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettings.property.enablePublicAccess">enablePublicAccess</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether public access to the web widget is enabled. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettings.property.enableRecaptcha">enableRecaptcha</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether reCAPTCHA verification for the web widget is enabled. |

---

##### `allowedOrigins`<sup>Optional</sup> <a name="allowedOrigins" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettings.property.allowedOrigins"></a>

```java
public java.util.List<java.lang.String> getAllowedOrigins();
```

- *Type:* java.util.List<java.lang.String>

The origins that are allowed to host the web widget.

An origin is defined by RFC 6454. If empty, all origins are allowed. A maximum of 100 origins is allowed. Example: "https://example.com"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_deployment#allowed_origins GoogleCesDeployment#allowed_origins}

---

##### `enableOriginCheck`<sup>Optional</sup> <a name="enableOriginCheck" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettings.property.enableOriginCheck"></a>

```java
public java.lang.Boolean|IResolvable getEnableOriginCheck();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether origin check for the web widget is enabled.

If true, the web widget will check the origin of the website that loads the web widget and only allow it to be loaded in the same origin or any of the allowed origins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_deployment#enable_origin_check GoogleCesDeployment#enable_origin_check}

---

##### `enablePublicAccess`<sup>Optional</sup> <a name="enablePublicAccess" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettings.property.enablePublicAccess"></a>

```java
public java.lang.Boolean|IResolvable getEnablePublicAccess();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether public access to the web widget is enabled.

If true, the web widget will be publicly accessible. If false, the web widget must be integrated with your own authentication and authorization system to return valid credentials for accessing the CES agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_deployment#enable_public_access GoogleCesDeployment#enable_public_access}

---

##### `enableRecaptcha`<sup>Optional</sup> <a name="enableRecaptcha" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettings.property.enableRecaptcha"></a>

```java
public java.lang.Boolean|IResolvable getEnableRecaptcha();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether reCAPTCHA verification for the web widget is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_deployment#enable_recaptcha GoogleCesDeployment#enable_recaptcha}

---

### GoogleCesDeploymentConfig <a name="GoogleCesDeploymentConfig" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_deployment.GoogleCesDeploymentConfig;

GoogleCesDeploymentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .app(java.lang.String)
    .appVersion(java.lang.String)
    .channelProfile(GoogleCesDeploymentChannelProfile)
    .displayName(java.lang.String)
    .location(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleCesDeploymentTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.app">app</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.appVersion">appVersion</a></code> | <code>java.lang.String</code> | The resource name of the app version to deploy. Format: projects/{project}/locations/{location}/apps/{app}/versions/{version}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.channelProfile">channelProfile</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfile">GoogleCesDeploymentChannelProfile</a></code> | channel_profile block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Display name of the deployment. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_deployment#id GoogleCesDeployment#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_deployment#project GoogleCesDeployment#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeouts">GoogleCesDeploymentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.app"></a>

```java
public java.lang.String getApp();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_deployment#app GoogleCesDeployment#app}

---

##### `appVersion`<sup>Required</sup> <a name="appVersion" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.appVersion"></a>

```java
public java.lang.String getAppVersion();
```

- *Type:* java.lang.String

The resource name of the app version to deploy. Format: projects/{project}/locations/{location}/apps/{app}/versions/{version}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_deployment#app_version GoogleCesDeployment#app_version}

---

##### `channelProfile`<sup>Required</sup> <a name="channelProfile" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.channelProfile"></a>

```java
public GoogleCesDeploymentChannelProfile getChannelProfile();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfile">GoogleCesDeploymentChannelProfile</a>

channel_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_deployment#channel_profile GoogleCesDeployment#channel_profile}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Display name of the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_deployment#display_name GoogleCesDeployment#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_deployment#location GoogleCesDeployment#location}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_deployment#deletion_policy GoogleCesDeployment#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_deployment#id GoogleCesDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_deployment#project GoogleCesDeployment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.timeouts"></a>

```java
public GoogleCesDeploymentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeouts">GoogleCesDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_deployment#timeouts GoogleCesDeployment#timeouts}

---

### GoogleCesDeploymentTimeouts <a name="GoogleCesDeploymentTimeouts" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_deployment.GoogleCesDeploymentTimeouts;

GoogleCesDeploymentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_deployment#create GoogleCesDeployment#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_deployment#delete GoogleCesDeployment#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_deployment#update GoogleCesDeployment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_deployment#create GoogleCesDeployment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_deployment#delete GoogleCesDeployment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_ces_deployment#update GoogleCesDeployment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCesDeploymentChannelProfileOutputReference <a name="GoogleCesDeploymentChannelProfileOutputReference" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_deployment.GoogleCesDeploymentChannelProfileOutputReference;

new GoogleCesDeploymentChannelProfileOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.putPersonaProperty">putPersonaProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.putWebWidgetConfig">putWebWidgetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.resetChannelType">resetChannelType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.resetDisableBargeInControl">resetDisableBargeInControl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.resetDisableDtmf">resetDisableDtmf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.resetPersonaProperty">resetPersonaProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.resetProfileId">resetProfileId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.resetWebWidgetConfig">resetWebWidgetConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPersonaProperty` <a name="putPersonaProperty" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.putPersonaProperty"></a>

```java
public void putPersonaProperty(GoogleCesDeploymentChannelProfilePersonaProperty value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.putPersonaProperty.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaProperty">GoogleCesDeploymentChannelProfilePersonaProperty</a>

---

##### `putWebWidgetConfig` <a name="putWebWidgetConfig" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.putWebWidgetConfig"></a>

```java
public void putWebWidgetConfig(GoogleCesDeploymentChannelProfileWebWidgetConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.putWebWidgetConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfig">GoogleCesDeploymentChannelProfileWebWidgetConfig</a>

---

##### `resetChannelType` <a name="resetChannelType" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.resetChannelType"></a>

```java
public void resetChannelType()
```

##### `resetDisableBargeInControl` <a name="resetDisableBargeInControl" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.resetDisableBargeInControl"></a>

```java
public void resetDisableBargeInControl()
```

##### `resetDisableDtmf` <a name="resetDisableDtmf" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.resetDisableDtmf"></a>

```java
public void resetDisableDtmf()
```

##### `resetPersonaProperty` <a name="resetPersonaProperty" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.resetPersonaProperty"></a>

```java
public void resetPersonaProperty()
```

##### `resetProfileId` <a name="resetProfileId" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.resetProfileId"></a>

```java
public void resetProfileId()
```

##### `resetWebWidgetConfig` <a name="resetWebWidgetConfig" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.resetWebWidgetConfig"></a>

```java
public void resetWebWidgetConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.personaProperty">personaProperty</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference">GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.webWidgetConfig">webWidgetConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference">GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.channelTypeInput">channelTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.disableBargeInControlInput">disableBargeInControlInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.disableDtmfInput">disableDtmfInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.personaPropertyInput">personaPropertyInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaProperty">GoogleCesDeploymentChannelProfilePersonaProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.profileIdInput">profileIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.webWidgetConfigInput">webWidgetConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfig">GoogleCesDeploymentChannelProfileWebWidgetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.channelType">channelType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.disableBargeInControl">disableBargeInControl</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.disableDtmf">disableDtmf</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.profileId">profileId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfile">GoogleCesDeploymentChannelProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `personaProperty`<sup>Required</sup> <a name="personaProperty" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.personaProperty"></a>

```java
public GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference getPersonaProperty();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference">GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference</a>

---

##### `webWidgetConfig`<sup>Required</sup> <a name="webWidgetConfig" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.webWidgetConfig"></a>

```java
public GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference getWebWidgetConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference">GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference</a>

---

##### `channelTypeInput`<sup>Optional</sup> <a name="channelTypeInput" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.channelTypeInput"></a>

```java
public java.lang.String getChannelTypeInput();
```

- *Type:* java.lang.String

---

##### `disableBargeInControlInput`<sup>Optional</sup> <a name="disableBargeInControlInput" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.disableBargeInControlInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableBargeInControlInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `disableDtmfInput`<sup>Optional</sup> <a name="disableDtmfInput" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.disableDtmfInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableDtmfInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `personaPropertyInput`<sup>Optional</sup> <a name="personaPropertyInput" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.personaPropertyInput"></a>

```java
public GoogleCesDeploymentChannelProfilePersonaProperty getPersonaPropertyInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaProperty">GoogleCesDeploymentChannelProfilePersonaProperty</a>

---

##### `profileIdInput`<sup>Optional</sup> <a name="profileIdInput" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.profileIdInput"></a>

```java
public java.lang.String getProfileIdInput();
```

- *Type:* java.lang.String

---

##### `webWidgetConfigInput`<sup>Optional</sup> <a name="webWidgetConfigInput" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.webWidgetConfigInput"></a>

```java
public GoogleCesDeploymentChannelProfileWebWidgetConfig getWebWidgetConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfig">GoogleCesDeploymentChannelProfileWebWidgetConfig</a>

---

##### `channelType`<sup>Required</sup> <a name="channelType" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.channelType"></a>

```java
public java.lang.String getChannelType();
```

- *Type:* java.lang.String

---

##### `disableBargeInControl`<sup>Required</sup> <a name="disableBargeInControl" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.disableBargeInControl"></a>

```java
public java.lang.Boolean|IResolvable getDisableBargeInControl();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `disableDtmf`<sup>Required</sup> <a name="disableDtmf" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.disableDtmf"></a>

```java
public java.lang.Boolean|IResolvable getDisableDtmf();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.profileId"></a>

```java
public java.lang.String getProfileId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.internalValue"></a>

```java
public GoogleCesDeploymentChannelProfile getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfile">GoogleCesDeploymentChannelProfile</a>

---


### GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference <a name="GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_deployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference;

new GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.resetPersona">resetPersona</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPersona` <a name="resetPersona" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.resetPersona"></a>

```java
public void resetPersona()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.property.personaInput">personaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.property.persona">persona</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaProperty">GoogleCesDeploymentChannelProfilePersonaProperty</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `personaInput`<sup>Optional</sup> <a name="personaInput" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.property.personaInput"></a>

```java
public java.lang.String getPersonaInput();
```

- *Type:* java.lang.String

---

##### `persona`<sup>Required</sup> <a name="persona" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.property.persona"></a>

```java
public java.lang.String getPersona();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.property.internalValue"></a>

```java
public GoogleCesDeploymentChannelProfilePersonaProperty getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaProperty">GoogleCesDeploymentChannelProfilePersonaProperty</a>

---


### GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference <a name="GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_deployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference;

new GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.putSecuritySettings">putSecuritySettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.resetModality">resetModality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.resetSecuritySettings">resetSecuritySettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.resetTheme">resetTheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.resetWebWidgetTitle">resetWebWidgetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSecuritySettings` <a name="putSecuritySettings" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.putSecuritySettings"></a>

```java
public void putSecuritySettings(GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.putSecuritySettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettings">GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettings</a>

---

##### `resetModality` <a name="resetModality" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.resetModality"></a>

```java
public void resetModality()
```

##### `resetSecuritySettings` <a name="resetSecuritySettings" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.resetSecuritySettings"></a>

```java
public void resetSecuritySettings()
```

##### `resetTheme` <a name="resetTheme" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.resetTheme"></a>

```java
public void resetTheme()
```

##### `resetWebWidgetTitle` <a name="resetWebWidgetTitle" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.resetWebWidgetTitle"></a>

```java
public void resetWebWidgetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.property.securitySettings">securitySettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference">GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.property.modalityInput">modalityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.property.securitySettingsInput">securitySettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettings">GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.property.themeInput">themeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.property.webWidgetTitleInput">webWidgetTitleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.property.modality">modality</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.property.theme">theme</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.property.webWidgetTitle">webWidgetTitle</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfig">GoogleCesDeploymentChannelProfileWebWidgetConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `securitySettings`<sup>Required</sup> <a name="securitySettings" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.property.securitySettings"></a>

```java
public GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference getSecuritySettings();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference">GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference</a>

---

##### `modalityInput`<sup>Optional</sup> <a name="modalityInput" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.property.modalityInput"></a>

```java
public java.lang.String getModalityInput();
```

- *Type:* java.lang.String

---

##### `securitySettingsInput`<sup>Optional</sup> <a name="securitySettingsInput" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.property.securitySettingsInput"></a>

```java
public GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettings getSecuritySettingsInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettings">GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettings</a>

---

##### `themeInput`<sup>Optional</sup> <a name="themeInput" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.property.themeInput"></a>

```java
public java.lang.String getThemeInput();
```

- *Type:* java.lang.String

---

##### `webWidgetTitleInput`<sup>Optional</sup> <a name="webWidgetTitleInput" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.property.webWidgetTitleInput"></a>

```java
public java.lang.String getWebWidgetTitleInput();
```

- *Type:* java.lang.String

---

##### `modality`<sup>Required</sup> <a name="modality" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.property.modality"></a>

```java
public java.lang.String getModality();
```

- *Type:* java.lang.String

---

##### `theme`<sup>Required</sup> <a name="theme" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.property.theme"></a>

```java
public java.lang.String getTheme();
```

- *Type:* java.lang.String

---

##### `webWidgetTitle`<sup>Required</sup> <a name="webWidgetTitle" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.property.webWidgetTitle"></a>

```java
public java.lang.String getWebWidgetTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.property.internalValue"></a>

```java
public GoogleCesDeploymentChannelProfileWebWidgetConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfig">GoogleCesDeploymentChannelProfileWebWidgetConfig</a>

---


### GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference <a name="GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_deployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference;

new GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.resetAllowedOrigins">resetAllowedOrigins</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.resetEnableOriginCheck">resetEnableOriginCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.resetEnablePublicAccess">resetEnablePublicAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.resetEnableRecaptcha">resetEnableRecaptcha</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedOrigins` <a name="resetAllowedOrigins" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.resetAllowedOrigins"></a>

```java
public void resetAllowedOrigins()
```

##### `resetEnableOriginCheck` <a name="resetEnableOriginCheck" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.resetEnableOriginCheck"></a>

```java
public void resetEnableOriginCheck()
```

##### `resetEnablePublicAccess` <a name="resetEnablePublicAccess" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.resetEnablePublicAccess"></a>

```java
public void resetEnablePublicAccess()
```

##### `resetEnableRecaptcha` <a name="resetEnableRecaptcha" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.resetEnableRecaptcha"></a>

```java
public void resetEnableRecaptcha()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.allowedOriginsInput">allowedOriginsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.enableOriginCheckInput">enableOriginCheckInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.enablePublicAccessInput">enablePublicAccessInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.enableRecaptchaInput">enableRecaptchaInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.allowedOrigins">allowedOrigins</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.enableOriginCheck">enableOriginCheck</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.enablePublicAccess">enablePublicAccess</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.enableRecaptcha">enableRecaptcha</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettings">GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedOriginsInput`<sup>Optional</sup> <a name="allowedOriginsInput" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.allowedOriginsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedOriginsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enableOriginCheckInput`<sup>Optional</sup> <a name="enableOriginCheckInput" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.enableOriginCheckInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableOriginCheckInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enablePublicAccessInput`<sup>Optional</sup> <a name="enablePublicAccessInput" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.enablePublicAccessInput"></a>

```java
public java.lang.Boolean|IResolvable getEnablePublicAccessInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableRecaptchaInput`<sup>Optional</sup> <a name="enableRecaptchaInput" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.enableRecaptchaInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableRecaptchaInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.allowedOrigins"></a>

```java
public java.util.List<java.lang.String> getAllowedOrigins();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enableOriginCheck`<sup>Required</sup> <a name="enableOriginCheck" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.enableOriginCheck"></a>

```java
public java.lang.Boolean|IResolvable getEnableOriginCheck();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enablePublicAccess`<sup>Required</sup> <a name="enablePublicAccess" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.enablePublicAccess"></a>

```java
public java.lang.Boolean|IResolvable getEnablePublicAccess();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableRecaptcha`<sup>Required</sup> <a name="enableRecaptcha" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.enableRecaptcha"></a>

```java
public java.lang.Boolean|IResolvable getEnableRecaptcha();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.internalValue"></a>

```java
public GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettings">GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettings</a>

---


### GoogleCesDeploymentTimeoutsOutputReference <a name="GoogleCesDeploymentTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_deployment.GoogleCesDeploymentTimeoutsOutputReference;

new GoogleCesDeploymentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeouts">GoogleCesDeploymentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleCesDeploymentTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeouts">GoogleCesDeploymentTimeouts</a>

---



