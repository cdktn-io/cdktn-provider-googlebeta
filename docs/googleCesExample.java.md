# `googleCesExample` Submodule <a name="`googleCesExample` Submodule" id="@cdktn/provider-google-beta.googleCesExample"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCesExample <a name="GoogleCesExample" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example google_ces_example}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_example.GoogleCesExample;

GoogleCesExample.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .app(java.lang.String)
    .displayName(java.lang.String)
    .exampleId(java.lang.String)
    .location(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .entryAgent(java.lang.String)
//  .id(java.lang.String)
//  .messages(IResolvable|java.util.List<GoogleCesExampleMessages>)
//  .project(java.lang.String)
//  .timeouts(GoogleCesExampleTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.app">app</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name', defining the app the example belongs to. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Display name of the example. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.exampleId">exampleId</a></code> | <code>java.lang.String</code> | The ID to use for the example, which will become the final component of the example's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name', defining what region the parent app is in. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Human-readable description of the example. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.entryAgent">entryAgent</a></code> | <code>java.lang.String</code> | The agent that initially handles the conversation. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#id GoogleCesExample#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.messages">messages</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessages">GoogleCesExampleMessages</a>></code> | messages block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#project GoogleCesExample#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeouts">GoogleCesExampleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.app"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name', defining the app the example belongs to.

It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#app GoogleCesExample#app}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Display name of the example.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#display_name GoogleCesExample#display_name}

---

##### `exampleId`<sup>Required</sup> <a name="exampleId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.exampleId"></a>

- *Type:* java.lang.String

The ID to use for the example, which will become the final component of the example's resource name.

In Terraform, this field is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#example_id GoogleCesExample#example_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name', defining what region the parent app is in.

It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#location GoogleCesExample#location}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#deletion_policy GoogleCesExample#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Human-readable description of the example.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#description GoogleCesExample#description}

---

##### `entryAgent`<sup>Optional</sup> <a name="entryAgent" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.entryAgent"></a>

- *Type:* java.lang.String

The agent that initially handles the conversation.

If not specified, the
example represents a conversation that is handled by the root agent.
Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#entry_agent GoogleCesExample#entry_agent}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#id GoogleCesExample#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `messages`<sup>Optional</sup> <a name="messages" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.messages"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessages">GoogleCesExampleMessages</a>>

messages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#messages GoogleCesExample#messages}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#project GoogleCesExample#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeouts">GoogleCesExampleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#timeouts GoogleCesExample#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.putMessages">putMessages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetEntryAgent">resetEntryAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetMessages">resetMessages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMessages` <a name="putMessages" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.putMessages"></a>

```java
public void putMessages(IResolvable|java.util.List<GoogleCesExampleMessages> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.putMessages.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessages">GoogleCesExampleMessages</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.putTimeouts"></a>

```java
public void putTimeouts(GoogleCesExampleTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeouts">GoogleCesExampleTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEntryAgent` <a name="resetEntryAgent" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetEntryAgent"></a>

```java
public void resetEntryAgent()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetId"></a>

```java
public void resetId()
```

##### `resetMessages` <a name="resetMessages" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetMessages"></a>

```java
public void resetMessages()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleCesExample resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_ces_example.GoogleCesExample;

GoogleCesExample.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_ces_example.GoogleCesExample;

GoogleCesExample.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_ces_example.GoogleCesExample;

GoogleCesExample.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_ces_example.GoogleCesExample;

GoogleCesExample.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleCesExample.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleCesExample resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleCesExample to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleCesExample that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleCesExample to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.invalid">invalid</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.messages">messages</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList">GoogleCesExampleMessagesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference">GoogleCesExampleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.appInput">appInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.entryAgentInput">entryAgentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.exampleIdInput">exampleIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.messagesInput">messagesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessages">GoogleCesExampleMessages</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeouts">GoogleCesExampleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.app">app</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.entryAgent">entryAgent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.exampleId">exampleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `invalid`<sup>Required</sup> <a name="invalid" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.invalid"></a>

```java
public IResolvable getInvalid();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `messages`<sup>Required</sup> <a name="messages" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.messages"></a>

```java
public GoogleCesExampleMessagesList getMessages();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList">GoogleCesExampleMessagesList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.timeouts"></a>

```java
public GoogleCesExampleTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference">GoogleCesExampleTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `appInput`<sup>Optional</sup> <a name="appInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.appInput"></a>

```java
public java.lang.String getAppInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `entryAgentInput`<sup>Optional</sup> <a name="entryAgentInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.entryAgentInput"></a>

```java
public java.lang.String getEntryAgentInput();
```

- *Type:* java.lang.String

---

##### `exampleIdInput`<sup>Optional</sup> <a name="exampleIdInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.exampleIdInput"></a>

```java
public java.lang.String getExampleIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `messagesInput`<sup>Optional</sup> <a name="messagesInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.messagesInput"></a>

```java
public IResolvable|java.util.List<GoogleCesExampleMessages> getMessagesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessages">GoogleCesExampleMessages</a>>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.timeoutsInput"></a>

```java
public IResolvable|GoogleCesExampleTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeouts">GoogleCesExampleTimeouts</a>

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.app"></a>

```java
public java.lang.String getApp();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `entryAgent`<sup>Required</sup> <a name="entryAgent" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.entryAgent"></a>

```java
public java.lang.String getEntryAgent();
```

- *Type:* java.lang.String

---

##### `exampleId`<sup>Required</sup> <a name="exampleId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.exampleId"></a>

```java
public java.lang.String getExampleId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExample.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCesExampleConfig <a name="GoogleCesExampleConfig" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_example.GoogleCesExampleConfig;

GoogleCesExampleConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .app(java.lang.String)
    .displayName(java.lang.String)
    .exampleId(java.lang.String)
    .location(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .entryAgent(java.lang.String)
//  .id(java.lang.String)
//  .messages(IResolvable|java.util.List<GoogleCesExampleMessages>)
//  .project(java.lang.String)
//  .timeouts(GoogleCesExampleTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.app">app</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name', defining the app the example belongs to. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Display name of the example. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.exampleId">exampleId</a></code> | <code>java.lang.String</code> | The ID to use for the example, which will become the final component of the example's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name', defining what region the parent app is in. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.description">description</a></code> | <code>java.lang.String</code> | Human-readable description of the example. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.entryAgent">entryAgent</a></code> | <code>java.lang.String</code> | The agent that initially handles the conversation. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#id GoogleCesExample#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.messages">messages</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessages">GoogleCesExampleMessages</a>></code> | messages block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#project GoogleCesExample#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeouts">GoogleCesExampleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.app"></a>

```java
public java.lang.String getApp();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name', defining the app the example belongs to.

It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#app GoogleCesExample#app}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Display name of the example.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#display_name GoogleCesExample#display_name}

---

##### `exampleId`<sup>Required</sup> <a name="exampleId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.exampleId"></a>

```java
public java.lang.String getExampleId();
```

- *Type:* java.lang.String

The ID to use for the example, which will become the final component of the example's resource name.

In Terraform, this field is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#example_id GoogleCesExample#example_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name', defining what region the parent app is in.

It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#location GoogleCesExample#location}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#deletion_policy GoogleCesExample#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Human-readable description of the example.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#description GoogleCesExample#description}

---

##### `entryAgent`<sup>Optional</sup> <a name="entryAgent" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.entryAgent"></a>

```java
public java.lang.String getEntryAgent();
```

- *Type:* java.lang.String

The agent that initially handles the conversation.

If not specified, the
example represents a conversation that is handled by the root agent.
Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#entry_agent GoogleCesExample#entry_agent}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#id GoogleCesExample#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `messages`<sup>Optional</sup> <a name="messages" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.messages"></a>

```java
public IResolvable|java.util.List<GoogleCesExampleMessages> getMessages();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessages">GoogleCesExampleMessages</a>>

messages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#messages GoogleCesExample#messages}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#project GoogleCesExample#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleConfig.property.timeouts"></a>

```java
public GoogleCesExampleTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeouts">GoogleCesExampleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#timeouts GoogleCesExample#timeouts}

---

### GoogleCesExampleMessages <a name="GoogleCesExampleMessages" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessages.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_example.GoogleCesExampleMessages;

GoogleCesExampleMessages.builder()
//  .chunks(IResolvable|java.util.List<GoogleCesExampleMessagesChunks>)
//  .role(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessages.property.chunks">chunks</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks">GoogleCesExampleMessagesChunks</a>></code> | chunks block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessages.property.role">role</a></code> | <code>java.lang.String</code> | The role within the conversation, e.g., user, agent. |

---

##### `chunks`<sup>Optional</sup> <a name="chunks" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessages.property.chunks"></a>

```java
public IResolvable|java.util.List<GoogleCesExampleMessagesChunks> getChunks();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks">GoogleCesExampleMessagesChunks</a>>

chunks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#chunks GoogleCesExample#chunks}

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessages.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

The role within the conversation, e.g., user, agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#role GoogleCesExample#role}

---

### GoogleCesExampleMessagesChunks <a name="GoogleCesExampleMessagesChunks" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_example.GoogleCesExampleMessagesChunks;

GoogleCesExampleMessagesChunks.builder()
//  .agentTransfer(GoogleCesExampleMessagesChunksAgentTransfer)
//  .image(GoogleCesExampleMessagesChunksImage)
//  .text(java.lang.String)
//  .toolCall(GoogleCesExampleMessagesChunksToolCall)
//  .toolResponse(GoogleCesExampleMessagesChunksToolResponse)
//  .updatedVariables(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks.property.agentTransfer">agentTransfer</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransfer">GoogleCesExampleMessagesChunksAgentTransfer</a></code> | agent_transfer block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks.property.image">image</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImage">GoogleCesExampleMessagesChunksImage</a></code> | image block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks.property.text">text</a></code> | <code>java.lang.String</code> | Text data. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks.property.toolCall">toolCall</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall">GoogleCesExampleMessagesChunksToolCall</a></code> | tool_call block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks.property.toolResponse">toolResponse</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse">GoogleCesExampleMessagesChunksToolResponse</a></code> | tool_response block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks.property.updatedVariables">updatedVariables</a></code> | <code>java.lang.String</code> | A struct represents variables that were updated in the conversation, keyed by variable names. |

---

##### `agentTransfer`<sup>Optional</sup> <a name="agentTransfer" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks.property.agentTransfer"></a>

```java
public GoogleCesExampleMessagesChunksAgentTransfer getAgentTransfer();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransfer">GoogleCesExampleMessagesChunksAgentTransfer</a>

agent_transfer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#agent_transfer GoogleCesExample#agent_transfer}

---

##### `image`<sup>Optional</sup> <a name="image" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks.property.image"></a>

```java
public GoogleCesExampleMessagesChunksImage getImage();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImage">GoogleCesExampleMessagesChunksImage</a>

image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#image GoogleCesExample#image}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

Text data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#text GoogleCesExample#text}

---

##### `toolCall`<sup>Optional</sup> <a name="toolCall" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks.property.toolCall"></a>

```java
public GoogleCesExampleMessagesChunksToolCall getToolCall();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall">GoogleCesExampleMessagesChunksToolCall</a>

tool_call block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#tool_call GoogleCesExample#tool_call}

---

##### `toolResponse`<sup>Optional</sup> <a name="toolResponse" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks.property.toolResponse"></a>

```java
public GoogleCesExampleMessagesChunksToolResponse getToolResponse();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse">GoogleCesExampleMessagesChunksToolResponse</a>

tool_response block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#tool_response GoogleCesExample#tool_response}

---

##### `updatedVariables`<sup>Optional</sup> <a name="updatedVariables" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks.property.updatedVariables"></a>

```java
public java.lang.String getUpdatedVariables();
```

- *Type:* java.lang.String

A struct represents variables that were updated in the conversation, keyed by variable names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#updated_variables GoogleCesExample#updated_variables}

---

### GoogleCesExampleMessagesChunksAgentTransfer <a name="GoogleCesExampleMessagesChunksAgentTransfer" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransfer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransfer.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_example.GoogleCesExampleMessagesChunksAgentTransfer;

GoogleCesExampleMessagesChunksAgentTransfer.builder()
    .targetAgent(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransfer.property.targetAgent">targetAgent</a></code> | <code>java.lang.String</code> | The agent to which the conversation is being transferred. The agent will handle the conversation from this point forward. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'. |

---

##### `targetAgent`<sup>Required</sup> <a name="targetAgent" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransfer.property.targetAgent"></a>

```java
public java.lang.String getTargetAgent();
```

- *Type:* java.lang.String

The agent to which the conversation is being transferred. The agent will handle the conversation from this point forward. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#target_agent GoogleCesExample#target_agent}

---

### GoogleCesExampleMessagesChunksImage <a name="GoogleCesExampleMessagesChunksImage" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImage.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_example.GoogleCesExampleMessagesChunksImage;

GoogleCesExampleMessagesChunksImage.builder()
    .data(java.lang.String)
    .mimeType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImage.property.data">data</a></code> | <code>java.lang.String</code> | Raw bytes of the image. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImage.property.mimeType">mimeType</a></code> | <code>java.lang.String</code> | The IANA standard MIME type of the source data. Supported image types includes: * image/png * image/jpeg * image/webp. |

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImage.property.data"></a>

```java
public java.lang.String getData();
```

- *Type:* java.lang.String

Raw bytes of the image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#data GoogleCesExample#data}

---

##### `mimeType`<sup>Required</sup> <a name="mimeType" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImage.property.mimeType"></a>

```java
public java.lang.String getMimeType();
```

- *Type:* java.lang.String

The IANA standard MIME type of the source data. Supported image types includes: * image/png * image/jpeg * image/webp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#mime_type GoogleCesExample#mime_type}

---

### GoogleCesExampleMessagesChunksToolCall <a name="GoogleCesExampleMessagesChunksToolCall" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_example.GoogleCesExampleMessagesChunksToolCall;

GoogleCesExampleMessagesChunksToolCall.builder()
//  .args(java.lang.String)
//  .id(java.lang.String)
//  .tool(java.lang.String)
//  .toolsetTool(GoogleCesExampleMessagesChunksToolCallToolsetTool)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall.property.args">args</a></code> | <code>java.lang.String</code> | The input parameters and values for the tool in JSON object format. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall.property.id">id</a></code> | <code>java.lang.String</code> | The unique identifier of the tool call. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall.property.tool">tool</a></code> | <code>java.lang.String</code> | The name of the tool to execute. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall.property.toolsetTool">toolsetTool</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetTool">GoogleCesExampleMessagesChunksToolCallToolsetTool</a></code> | toolset_tool block. |

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall.property.args"></a>

```java
public java.lang.String getArgs();
```

- *Type:* java.lang.String

The input parameters and values for the tool in JSON object format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#args GoogleCesExample#args}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The unique identifier of the tool call.

If populated, the client should
return the execution result with the matching ID in
ToolResponse.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#id GoogleCesExample#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tool`<sup>Optional</sup> <a name="tool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall.property.tool"></a>

```java
public java.lang.String getTool();
```

- *Type:* java.lang.String

The name of the tool to execute. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#tool GoogleCesExample#tool}

---

##### `toolsetTool`<sup>Optional</sup> <a name="toolsetTool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall.property.toolsetTool"></a>

```java
public GoogleCesExampleMessagesChunksToolCallToolsetTool getToolsetTool();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetTool">GoogleCesExampleMessagesChunksToolCallToolsetTool</a>

toolset_tool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#toolset_tool GoogleCesExample#toolset_tool}

---

### GoogleCesExampleMessagesChunksToolCallToolsetTool <a name="GoogleCesExampleMessagesChunksToolCallToolsetTool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetTool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetTool.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_example.GoogleCesExampleMessagesChunksToolCallToolsetTool;

GoogleCesExampleMessagesChunksToolCallToolsetTool.builder()
    .toolset(java.lang.String)
//  .toolId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetTool.property.toolset">toolset</a></code> | <code>java.lang.String</code> | The resource name of the Toolset from which this tool is derived. Format: 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetTool.property.toolId">toolId</a></code> | <code>java.lang.String</code> | The tool ID to filter the tools to retrieve the schema for. |

---

##### `toolset`<sup>Required</sup> <a name="toolset" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetTool.property.toolset"></a>

```java
public java.lang.String getToolset();
```

- *Type:* java.lang.String

The resource name of the Toolset from which this tool is derived. Format: 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#toolset GoogleCesExample#toolset}

---

##### `toolId`<sup>Optional</sup> <a name="toolId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetTool.property.toolId"></a>

```java
public java.lang.String getToolId();
```

- *Type:* java.lang.String

The tool ID to filter the tools to retrieve the schema for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#tool_id GoogleCesExample#tool_id}

---

### GoogleCesExampleMessagesChunksToolResponse <a name="GoogleCesExampleMessagesChunksToolResponse" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_example.GoogleCesExampleMessagesChunksToolResponse;

GoogleCesExampleMessagesChunksToolResponse.builder()
    .response(java.lang.String)
//  .id(java.lang.String)
//  .tool(java.lang.String)
//  .toolsetTool(GoogleCesExampleMessagesChunksToolResponseToolsetTool)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse.property.response">response</a></code> | <code>java.lang.String</code> | The tool execution result in JSON object format. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse.property.id">id</a></code> | <code>java.lang.String</code> | The matching ID of the tool call the response is for. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse.property.tool">tool</a></code> | <code>java.lang.String</code> | The name of the tool to execute. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse.property.toolsetTool">toolsetTool</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetTool">GoogleCesExampleMessagesChunksToolResponseToolsetTool</a></code> | toolset_tool block. |

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse.property.response"></a>

```java
public java.lang.String getResponse();
```

- *Type:* java.lang.String

The tool execution result in JSON object format.

Use "output" key to specify tool response and "error" key to specify
error details (if any). If "output" and "error" keys are not specified,
then whole "response" is treated as tool execution result.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#response GoogleCesExample#response}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The matching ID of the tool call the response is for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#id GoogleCesExample#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tool`<sup>Optional</sup> <a name="tool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse.property.tool"></a>

```java
public java.lang.String getTool();
```

- *Type:* java.lang.String

The name of the tool to execute. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#tool GoogleCesExample#tool}

---

##### `toolsetTool`<sup>Optional</sup> <a name="toolsetTool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse.property.toolsetTool"></a>

```java
public GoogleCesExampleMessagesChunksToolResponseToolsetTool getToolsetTool();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetTool">GoogleCesExampleMessagesChunksToolResponseToolsetTool</a>

toolset_tool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#toolset_tool GoogleCesExample#toolset_tool}

---

### GoogleCesExampleMessagesChunksToolResponseToolsetTool <a name="GoogleCesExampleMessagesChunksToolResponseToolsetTool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetTool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetTool.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_example.GoogleCesExampleMessagesChunksToolResponseToolsetTool;

GoogleCesExampleMessagesChunksToolResponseToolsetTool.builder()
    .toolset(java.lang.String)
//  .toolId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetTool.property.toolset">toolset</a></code> | <code>java.lang.String</code> | The resource name of the Toolset from which this tool is derived. Format: 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetTool.property.toolId">toolId</a></code> | <code>java.lang.String</code> | The tool ID to filter the tools to retrieve the schema for. |

---

##### `toolset`<sup>Required</sup> <a name="toolset" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetTool.property.toolset"></a>

```java
public java.lang.String getToolset();
```

- *Type:* java.lang.String

The resource name of the Toolset from which this tool is derived. Format: 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#toolset GoogleCesExample#toolset}

---

##### `toolId`<sup>Optional</sup> <a name="toolId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetTool.property.toolId"></a>

```java
public java.lang.String getToolId();
```

- *Type:* java.lang.String

The tool ID to filter the tools to retrieve the schema for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#tool_id GoogleCesExample#tool_id}

---

### GoogleCesExampleTimeouts <a name="GoogleCesExampleTimeouts" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_example.GoogleCesExampleTimeouts;

GoogleCesExampleTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#create GoogleCesExample#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#delete GoogleCesExample#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#update GoogleCesExample#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#create GoogleCesExample#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#delete GoogleCesExample#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_ces_example#update GoogleCesExample#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCesExampleMessagesChunksAgentTransferOutputReference <a name="GoogleCesExampleMessagesChunksAgentTransferOutputReference" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_example.GoogleCesExampleMessagesChunksAgentTransferOutputReference;

new GoogleCesExampleMessagesChunksAgentTransferOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.property.targetAgentInput">targetAgentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.property.targetAgent">targetAgent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransfer">GoogleCesExampleMessagesChunksAgentTransfer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `targetAgentInput`<sup>Optional</sup> <a name="targetAgentInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.property.targetAgentInput"></a>

```java
public java.lang.String getTargetAgentInput();
```

- *Type:* java.lang.String

---

##### `targetAgent`<sup>Required</sup> <a name="targetAgent" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.property.targetAgent"></a>

```java
public java.lang.String getTargetAgent();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference.property.internalValue"></a>

```java
public GoogleCesExampleMessagesChunksAgentTransfer getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransfer">GoogleCesExampleMessagesChunksAgentTransfer</a>

---


### GoogleCesExampleMessagesChunksImageOutputReference <a name="GoogleCesExampleMessagesChunksImageOutputReference" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_example.GoogleCesExampleMessagesChunksImageOutputReference;

new GoogleCesExampleMessagesChunksImageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.property.dataInput">dataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.property.mimeTypeInput">mimeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.property.data">data</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.property.mimeType">mimeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImage">GoogleCesExampleMessagesChunksImage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.property.dataInput"></a>

```java
public java.lang.String getDataInput();
```

- *Type:* java.lang.String

---

##### `mimeTypeInput`<sup>Optional</sup> <a name="mimeTypeInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.property.mimeTypeInput"></a>

```java
public java.lang.String getMimeTypeInput();
```

- *Type:* java.lang.String

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.property.data"></a>

```java
public java.lang.String getData();
```

- *Type:* java.lang.String

---

##### `mimeType`<sup>Required</sup> <a name="mimeType" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.property.mimeType"></a>

```java
public java.lang.String getMimeType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference.property.internalValue"></a>

```java
public GoogleCesExampleMessagesChunksImage getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImage">GoogleCesExampleMessagesChunksImage</a>

---


### GoogleCesExampleMessagesChunksList <a name="GoogleCesExampleMessagesChunksList" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_example.GoogleCesExampleMessagesChunksList;

new GoogleCesExampleMessagesChunksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.get"></a>

```java
public GoogleCesExampleMessagesChunksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks">GoogleCesExampleMessagesChunks</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleCesExampleMessagesChunks> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks">GoogleCesExampleMessagesChunks</a>>

---


### GoogleCesExampleMessagesChunksOutputReference <a name="GoogleCesExampleMessagesChunksOutputReference" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_example.GoogleCesExampleMessagesChunksOutputReference;

new GoogleCesExampleMessagesChunksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.putAgentTransfer">putAgentTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.putImage">putImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.putToolCall">putToolCall</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.putToolResponse">putToolResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.resetAgentTransfer">resetAgentTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.resetImage">resetImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.resetText">resetText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.resetToolCall">resetToolCall</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.resetToolResponse">resetToolResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.resetUpdatedVariables">resetUpdatedVariables</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAgentTransfer` <a name="putAgentTransfer" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.putAgentTransfer"></a>

```java
public void putAgentTransfer(GoogleCesExampleMessagesChunksAgentTransfer value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.putAgentTransfer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransfer">GoogleCesExampleMessagesChunksAgentTransfer</a>

---

##### `putImage` <a name="putImage" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.putImage"></a>

```java
public void putImage(GoogleCesExampleMessagesChunksImage value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.putImage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImage">GoogleCesExampleMessagesChunksImage</a>

---

##### `putToolCall` <a name="putToolCall" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.putToolCall"></a>

```java
public void putToolCall(GoogleCesExampleMessagesChunksToolCall value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.putToolCall.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall">GoogleCesExampleMessagesChunksToolCall</a>

---

##### `putToolResponse` <a name="putToolResponse" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.putToolResponse"></a>

```java
public void putToolResponse(GoogleCesExampleMessagesChunksToolResponse value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.putToolResponse.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse">GoogleCesExampleMessagesChunksToolResponse</a>

---

##### `resetAgentTransfer` <a name="resetAgentTransfer" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.resetAgentTransfer"></a>

```java
public void resetAgentTransfer()
```

##### `resetImage` <a name="resetImage" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.resetImage"></a>

```java
public void resetImage()
```

##### `resetText` <a name="resetText" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.resetText"></a>

```java
public void resetText()
```

##### `resetToolCall` <a name="resetToolCall" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.resetToolCall"></a>

```java
public void resetToolCall()
```

##### `resetToolResponse` <a name="resetToolResponse" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.resetToolResponse"></a>

```java
public void resetToolResponse()
```

##### `resetUpdatedVariables` <a name="resetUpdatedVariables" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.resetUpdatedVariables"></a>

```java
public void resetUpdatedVariables()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.agentTransfer">agentTransfer</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference">GoogleCesExampleMessagesChunksAgentTransferOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.image">image</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference">GoogleCesExampleMessagesChunksImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.toolCall">toolCall</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference">GoogleCesExampleMessagesChunksToolCallOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.toolResponse">toolResponse</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference">GoogleCesExampleMessagesChunksToolResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.agentTransferInput">agentTransferInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransfer">GoogleCesExampleMessagesChunksAgentTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.imageInput">imageInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImage">GoogleCesExampleMessagesChunksImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.textInput">textInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.toolCallInput">toolCallInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall">GoogleCesExampleMessagesChunksToolCall</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.toolResponseInput">toolResponseInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse">GoogleCesExampleMessagesChunksToolResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.updatedVariablesInput">updatedVariablesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.text">text</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.updatedVariables">updatedVariables</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks">GoogleCesExampleMessagesChunks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `agentTransfer`<sup>Required</sup> <a name="agentTransfer" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.agentTransfer"></a>

```java
public GoogleCesExampleMessagesChunksAgentTransferOutputReference getAgentTransfer();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransferOutputReference">GoogleCesExampleMessagesChunksAgentTransferOutputReference</a>

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.image"></a>

```java
public GoogleCesExampleMessagesChunksImageOutputReference getImage();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImageOutputReference">GoogleCesExampleMessagesChunksImageOutputReference</a>

---

##### `toolCall`<sup>Required</sup> <a name="toolCall" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.toolCall"></a>

```java
public GoogleCesExampleMessagesChunksToolCallOutputReference getToolCall();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference">GoogleCesExampleMessagesChunksToolCallOutputReference</a>

---

##### `toolResponse`<sup>Required</sup> <a name="toolResponse" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.toolResponse"></a>

```java
public GoogleCesExampleMessagesChunksToolResponseOutputReference getToolResponse();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference">GoogleCesExampleMessagesChunksToolResponseOutputReference</a>

---

##### `agentTransferInput`<sup>Optional</sup> <a name="agentTransferInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.agentTransferInput"></a>

```java
public GoogleCesExampleMessagesChunksAgentTransfer getAgentTransferInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksAgentTransfer">GoogleCesExampleMessagesChunksAgentTransfer</a>

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.imageInput"></a>

```java
public GoogleCesExampleMessagesChunksImage getImageInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksImage">GoogleCesExampleMessagesChunksImage</a>

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.textInput"></a>

```java
public java.lang.String getTextInput();
```

- *Type:* java.lang.String

---

##### `toolCallInput`<sup>Optional</sup> <a name="toolCallInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.toolCallInput"></a>

```java
public GoogleCesExampleMessagesChunksToolCall getToolCallInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall">GoogleCesExampleMessagesChunksToolCall</a>

---

##### `toolResponseInput`<sup>Optional</sup> <a name="toolResponseInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.toolResponseInput"></a>

```java
public GoogleCesExampleMessagesChunksToolResponse getToolResponseInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse">GoogleCesExampleMessagesChunksToolResponse</a>

---

##### `updatedVariablesInput`<sup>Optional</sup> <a name="updatedVariablesInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.updatedVariablesInput"></a>

```java
public java.lang.String getUpdatedVariablesInput();
```

- *Type:* java.lang.String

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

---

##### `updatedVariables`<sup>Required</sup> <a name="updatedVariables" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.updatedVariables"></a>

```java
public java.lang.String getUpdatedVariables();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleCesExampleMessagesChunks getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks">GoogleCesExampleMessagesChunks</a>

---


### GoogleCesExampleMessagesChunksToolCallOutputReference <a name="GoogleCesExampleMessagesChunksToolCallOutputReference" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_example.GoogleCesExampleMessagesChunksToolCallOutputReference;

new GoogleCesExampleMessagesChunksToolCallOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.putToolsetTool">putToolsetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.resetArgs">resetArgs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.resetTool">resetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.resetToolsetTool">resetToolsetTool</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putToolsetTool` <a name="putToolsetTool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.putToolsetTool"></a>

```java
public void putToolsetTool(GoogleCesExampleMessagesChunksToolCallToolsetTool value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.putToolsetTool.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetTool">GoogleCesExampleMessagesChunksToolCallToolsetTool</a>

---

##### `resetArgs` <a name="resetArgs" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.resetArgs"></a>

```java
public void resetArgs()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetTool` <a name="resetTool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.resetTool"></a>

```java
public void resetTool()
```

##### `resetToolsetTool` <a name="resetToolsetTool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.resetToolsetTool"></a>

```java
public void resetToolsetTool()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.toolsetTool">toolsetTool</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference">GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.argsInput">argsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.toolInput">toolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.toolsetToolInput">toolsetToolInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetTool">GoogleCesExampleMessagesChunksToolCallToolsetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.args">args</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.tool">tool</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall">GoogleCesExampleMessagesChunksToolCall</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `toolsetTool`<sup>Required</sup> <a name="toolsetTool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.toolsetTool"></a>

```java
public GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference getToolsetTool();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference">GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference</a>

---

##### `argsInput`<sup>Optional</sup> <a name="argsInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.argsInput"></a>

```java
public java.lang.String getArgsInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `toolInput`<sup>Optional</sup> <a name="toolInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.toolInput"></a>

```java
public java.lang.String getToolInput();
```

- *Type:* java.lang.String

---

##### `toolsetToolInput`<sup>Optional</sup> <a name="toolsetToolInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.toolsetToolInput"></a>

```java
public GoogleCesExampleMessagesChunksToolCallToolsetTool getToolsetToolInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetTool">GoogleCesExampleMessagesChunksToolCallToolsetTool</a>

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.args"></a>

```java
public java.lang.String getArgs();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tool`<sup>Required</sup> <a name="tool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.tool"></a>

```java
public java.lang.String getTool();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallOutputReference.property.internalValue"></a>

```java
public GoogleCesExampleMessagesChunksToolCall getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCall">GoogleCesExampleMessagesChunksToolCall</a>

---


### GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference <a name="GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_example.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference;

new GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.resetToolId">resetToolId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetToolId` <a name="resetToolId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.resetToolId"></a>

```java
public void resetToolId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.property.toolIdInput">toolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.property.toolsetInput">toolsetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.property.toolId">toolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.property.toolset">toolset</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetTool">GoogleCesExampleMessagesChunksToolCallToolsetTool</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `toolIdInput`<sup>Optional</sup> <a name="toolIdInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.property.toolIdInput"></a>

```java
public java.lang.String getToolIdInput();
```

- *Type:* java.lang.String

---

##### `toolsetInput`<sup>Optional</sup> <a name="toolsetInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.property.toolsetInput"></a>

```java
public java.lang.String getToolsetInput();
```

- *Type:* java.lang.String

---

##### `toolId`<sup>Required</sup> <a name="toolId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.property.toolId"></a>

```java
public java.lang.String getToolId();
```

- *Type:* java.lang.String

---

##### `toolset`<sup>Required</sup> <a name="toolset" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.property.toolset"></a>

```java
public java.lang.String getToolset();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetToolOutputReference.property.internalValue"></a>

```java
public GoogleCesExampleMessagesChunksToolCallToolsetTool getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolCallToolsetTool">GoogleCesExampleMessagesChunksToolCallToolsetTool</a>

---


### GoogleCesExampleMessagesChunksToolResponseOutputReference <a name="GoogleCesExampleMessagesChunksToolResponseOutputReference" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_example.GoogleCesExampleMessagesChunksToolResponseOutputReference;

new GoogleCesExampleMessagesChunksToolResponseOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.putToolsetTool">putToolsetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.resetTool">resetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.resetToolsetTool">resetToolsetTool</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putToolsetTool` <a name="putToolsetTool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.putToolsetTool"></a>

```java
public void putToolsetTool(GoogleCesExampleMessagesChunksToolResponseToolsetTool value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.putToolsetTool.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetTool">GoogleCesExampleMessagesChunksToolResponseToolsetTool</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetTool` <a name="resetTool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.resetTool"></a>

```java
public void resetTool()
```

##### `resetToolsetTool` <a name="resetToolsetTool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.resetToolsetTool"></a>

```java
public void resetToolsetTool()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.toolsetTool">toolsetTool</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference">GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.responseInput">responseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.toolInput">toolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.toolsetToolInput">toolsetToolInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetTool">GoogleCesExampleMessagesChunksToolResponseToolsetTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.response">response</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.tool">tool</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse">GoogleCesExampleMessagesChunksToolResponse</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `toolsetTool`<sup>Required</sup> <a name="toolsetTool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.toolsetTool"></a>

```java
public GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference getToolsetTool();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference">GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `responseInput`<sup>Optional</sup> <a name="responseInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.responseInput"></a>

```java
public java.lang.String getResponseInput();
```

- *Type:* java.lang.String

---

##### `toolInput`<sup>Optional</sup> <a name="toolInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.toolInput"></a>

```java
public java.lang.String getToolInput();
```

- *Type:* java.lang.String

---

##### `toolsetToolInput`<sup>Optional</sup> <a name="toolsetToolInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.toolsetToolInput"></a>

```java
public GoogleCesExampleMessagesChunksToolResponseToolsetTool getToolsetToolInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetTool">GoogleCesExampleMessagesChunksToolResponseToolsetTool</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.response"></a>

```java
public java.lang.String getResponse();
```

- *Type:* java.lang.String

---

##### `tool`<sup>Required</sup> <a name="tool" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.tool"></a>

```java
public java.lang.String getTool();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseOutputReference.property.internalValue"></a>

```java
public GoogleCesExampleMessagesChunksToolResponse getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponse">GoogleCesExampleMessagesChunksToolResponse</a>

---


### GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference <a name="GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_example.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference;

new GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.resetToolId">resetToolId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetToolId` <a name="resetToolId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.resetToolId"></a>

```java
public void resetToolId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.toolIdInput">toolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.toolsetInput">toolsetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.toolId">toolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.toolset">toolset</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetTool">GoogleCesExampleMessagesChunksToolResponseToolsetTool</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `toolIdInput`<sup>Optional</sup> <a name="toolIdInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.toolIdInput"></a>

```java
public java.lang.String getToolIdInput();
```

- *Type:* java.lang.String

---

##### `toolsetInput`<sup>Optional</sup> <a name="toolsetInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.toolsetInput"></a>

```java
public java.lang.String getToolsetInput();
```

- *Type:* java.lang.String

---

##### `toolId`<sup>Required</sup> <a name="toolId" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.toolId"></a>

```java
public java.lang.String getToolId();
```

- *Type:* java.lang.String

---

##### `toolset`<sup>Required</sup> <a name="toolset" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.toolset"></a>

```java
public java.lang.String getToolset();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetToolOutputReference.property.internalValue"></a>

```java
public GoogleCesExampleMessagesChunksToolResponseToolsetTool getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksToolResponseToolsetTool">GoogleCesExampleMessagesChunksToolResponseToolsetTool</a>

---


### GoogleCesExampleMessagesList <a name="GoogleCesExampleMessagesList" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_example.GoogleCesExampleMessagesList;

new GoogleCesExampleMessagesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.get"></a>

```java
public GoogleCesExampleMessagesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessages">GoogleCesExampleMessages</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleCesExampleMessages> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessages">GoogleCesExampleMessages</a>>

---


### GoogleCesExampleMessagesOutputReference <a name="GoogleCesExampleMessagesOutputReference" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_example.GoogleCesExampleMessagesOutputReference;

new GoogleCesExampleMessagesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.putChunks">putChunks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.resetChunks">resetChunks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.resetRole">resetRole</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putChunks` <a name="putChunks" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.putChunks"></a>

```java
public void putChunks(IResolvable|java.util.List<GoogleCesExampleMessagesChunks> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.putChunks.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks">GoogleCesExampleMessagesChunks</a>>

---

##### `resetChunks` <a name="resetChunks" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.resetChunks"></a>

```java
public void resetChunks()
```

##### `resetRole` <a name="resetRole" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.resetRole"></a>

```java
public void resetRole()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.property.chunks">chunks</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList">GoogleCesExampleMessagesChunksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.property.chunksInput">chunksInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks">GoogleCesExampleMessagesChunks</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessages">GoogleCesExampleMessages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `chunks`<sup>Required</sup> <a name="chunks" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.property.chunks"></a>

```java
public GoogleCesExampleMessagesChunksList getChunks();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunksList">GoogleCesExampleMessagesChunksList</a>

---

##### `chunksInput`<sup>Optional</sup> <a name="chunksInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.property.chunksInput"></a>

```java
public IResolvable|java.util.List<GoogleCesExampleMessagesChunks> getChunksInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesChunks">GoogleCesExampleMessagesChunks</a>>

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessagesOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleCesExampleMessages getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleMessages">GoogleCesExampleMessages</a>

---


### GoogleCesExampleTimeoutsOutputReference <a name="GoogleCesExampleTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_example.GoogleCesExampleTimeoutsOutputReference;

new GoogleCesExampleTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeouts">GoogleCesExampleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleCesExampleTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesExample.GoogleCesExampleTimeouts">GoogleCesExampleTimeouts</a>

---



