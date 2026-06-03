# `googleSecureSourceManagerHook` Submodule <a name="`googleSecureSourceManagerHook` Submodule" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSecureSourceManagerHook <a name="GoogleSecureSourceManagerHook" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_hook google_secure_source_manager_hook}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_secure_source_manager_hook.GoogleSecureSourceManagerHook;

GoogleSecureSourceManagerHook.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .hookId(java.lang.String)
    .location(java.lang.String)
    .repositoryId(java.lang.String)
    .targetUri(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .disabled(java.lang.Boolean|IResolvable)
//  .events(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .pushOption(GoogleSecureSourceManagerHookPushOption)
//  .sensitiveQueryString(java.lang.String)
//  .timeouts(GoogleSecureSourceManagerHookTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.hookId">hookId</a></code> | <code>java.lang.String</code> | The ID for the Hook. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location for the Repository. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.repositoryId">repositoryId</a></code> | <code>java.lang.String</code> | The ID for the Repository. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.targetUri">targetUri</a></code> | <code>java.lang.String</code> | The target URI to which the payloads will be delivered. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Determines if the hook disabled or not. Set to true to stop sending traffic. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.events">events</a></code> | <code>java.util.List<java.lang.String></code> | The events that trigger hook on. Possible values: ["PUSH", "PULL_REQUEST"]. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_hook#id GoogleSecureSourceManagerHook#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_hook#project GoogleSecureSourceManagerHook#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.pushOption">pushOption</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOption">GoogleSecureSourceManagerHookPushOption</a></code> | push_option block. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.sensitiveQueryString">sensitiveQueryString</a></code> | <code>java.lang.String</code> | The sensitive query string to be appended to the target URI. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeouts">GoogleSecureSourceManagerHookTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `hookId`<sup>Required</sup> <a name="hookId" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.hookId"></a>

- *Type:* java.lang.String

The ID for the Hook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_hook#hook_id GoogleSecureSourceManagerHook#hook_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location for the Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_hook#location GoogleSecureSourceManagerHook#location}

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.repositoryId"></a>

- *Type:* java.lang.String

The ID for the Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_hook#repository_id GoogleSecureSourceManagerHook#repository_id}

---

##### `targetUri`<sup>Required</sup> <a name="targetUri" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.targetUri"></a>

- *Type:* java.lang.String

The target URI to which the payloads will be delivered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_hook#target_uri GoogleSecureSourceManagerHook#target_uri}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_hook#deletion_policy GoogleSecureSourceManagerHook#deletion_policy}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.disabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Determines if the hook disabled or not. Set to true to stop sending traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_hook#disabled GoogleSecureSourceManagerHook#disabled}

---

##### `events`<sup>Optional</sup> <a name="events" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.events"></a>

- *Type:* java.util.List<java.lang.String>

The events that trigger hook on. Possible values: ["PUSH", "PULL_REQUEST"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_hook#events GoogleSecureSourceManagerHook#events}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_hook#id GoogleSecureSourceManagerHook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_hook#project GoogleSecureSourceManagerHook#project}.

---

##### `pushOption`<sup>Optional</sup> <a name="pushOption" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.pushOption"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOption">GoogleSecureSourceManagerHookPushOption</a>

push_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_hook#push_option GoogleSecureSourceManagerHook#push_option}

---

##### `sensitiveQueryString`<sup>Optional</sup> <a name="sensitiveQueryString" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.sensitiveQueryString"></a>

- *Type:* java.lang.String

The sensitive query string to be appended to the target URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_hook#sensitive_query_string GoogleSecureSourceManagerHook#sensitive_query_string}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeouts">GoogleSecureSourceManagerHookTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_hook#timeouts GoogleSecureSourceManagerHook#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.putPushOption">putPushOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.resetEvents">resetEvents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.resetPushOption">resetPushOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.resetSensitiveQueryString">resetSensitiveQueryString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPushOption` <a name="putPushOption" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.putPushOption"></a>

```java
public void putPushOption(GoogleSecureSourceManagerHookPushOption value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.putPushOption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOption">GoogleSecureSourceManagerHookPushOption</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.putTimeouts"></a>

```java
public void putTimeouts(GoogleSecureSourceManagerHookTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeouts">GoogleSecureSourceManagerHookTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.resetDisabled"></a>

```java
public void resetDisabled()
```

##### `resetEvents` <a name="resetEvents" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.resetEvents"></a>

```java
public void resetEvents()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.resetProject"></a>

```java
public void resetProject()
```

##### `resetPushOption` <a name="resetPushOption" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.resetPushOption"></a>

```java
public void resetPushOption()
```

##### `resetSensitiveQueryString` <a name="resetSensitiveQueryString" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.resetSensitiveQueryString"></a>

```java
public void resetSensitiveQueryString()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleSecureSourceManagerHook resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_secure_source_manager_hook.GoogleSecureSourceManagerHook;

GoogleSecureSourceManagerHook.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_secure_source_manager_hook.GoogleSecureSourceManagerHook;

GoogleSecureSourceManagerHook.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_secure_source_manager_hook.GoogleSecureSourceManagerHook;

GoogleSecureSourceManagerHook.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_secure_source_manager_hook.GoogleSecureSourceManagerHook;

GoogleSecureSourceManagerHook.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleSecureSourceManagerHook.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleSecureSourceManagerHook resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleSecureSourceManagerHook to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleSecureSourceManagerHook that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_hook#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleSecureSourceManagerHook to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.pushOption">pushOption</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference">GoogleSecureSourceManagerHookPushOptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference">GoogleSecureSourceManagerHookTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.eventsInput">eventsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.hookIdInput">hookIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.pushOptionInput">pushOptionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOption">GoogleSecureSourceManagerHookPushOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.repositoryIdInput">repositoryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.sensitiveQueryStringInput">sensitiveQueryStringInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.targetUriInput">targetUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeouts">GoogleSecureSourceManagerHookTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.events">events</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.hookId">hookId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.repositoryId">repositoryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.sensitiveQueryString">sensitiveQueryString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.targetUri">targetUri</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `pushOption`<sup>Required</sup> <a name="pushOption" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.pushOption"></a>

```java
public GoogleSecureSourceManagerHookPushOptionOutputReference getPushOption();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference">GoogleSecureSourceManagerHookPushOptionOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.timeouts"></a>

```java
public GoogleSecureSourceManagerHookTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference">GoogleSecureSourceManagerHookTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.disabledInput"></a>

```java
public java.lang.Boolean|IResolvable getDisabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `eventsInput`<sup>Optional</sup> <a name="eventsInput" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.eventsInput"></a>

```java
public java.util.List<java.lang.String> getEventsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `hookIdInput`<sup>Optional</sup> <a name="hookIdInput" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.hookIdInput"></a>

```java
public java.lang.String getHookIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `pushOptionInput`<sup>Optional</sup> <a name="pushOptionInput" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.pushOptionInput"></a>

```java
public GoogleSecureSourceManagerHookPushOption getPushOptionInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOption">GoogleSecureSourceManagerHookPushOption</a>

---

##### `repositoryIdInput`<sup>Optional</sup> <a name="repositoryIdInput" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.repositoryIdInput"></a>

```java
public java.lang.String getRepositoryIdInput();
```

- *Type:* java.lang.String

---

##### `sensitiveQueryStringInput`<sup>Optional</sup> <a name="sensitiveQueryStringInput" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.sensitiveQueryStringInput"></a>

```java
public java.lang.String getSensitiveQueryStringInput();
```

- *Type:* java.lang.String

---

##### `targetUriInput`<sup>Optional</sup> <a name="targetUriInput" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.targetUriInput"></a>

```java
public java.lang.String getTargetUriInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.timeoutsInput"></a>

```java
public IResolvable|GoogleSecureSourceManagerHookTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeouts">GoogleSecureSourceManagerHookTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.events"></a>

```java
public java.util.List<java.lang.String> getEvents();
```

- *Type:* java.util.List<java.lang.String>

---

##### `hookId`<sup>Required</sup> <a name="hookId" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.hookId"></a>

```java
public java.lang.String getHookId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.repositoryId"></a>

```java
public java.lang.String getRepositoryId();
```

- *Type:* java.lang.String

---

##### `sensitiveQueryString`<sup>Required</sup> <a name="sensitiveQueryString" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.sensitiveQueryString"></a>

```java
public java.lang.String getSensitiveQueryString();
```

- *Type:* java.lang.String

---

##### `targetUri`<sup>Required</sup> <a name="targetUri" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.targetUri"></a>

```java
public java.lang.String getTargetUri();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHook.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSecureSourceManagerHookConfig <a name="GoogleSecureSourceManagerHookConfig" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_secure_source_manager_hook.GoogleSecureSourceManagerHookConfig;

GoogleSecureSourceManagerHookConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .hookId(java.lang.String)
    .location(java.lang.String)
    .repositoryId(java.lang.String)
    .targetUri(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .disabled(java.lang.Boolean|IResolvable)
//  .events(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .pushOption(GoogleSecureSourceManagerHookPushOption)
//  .sensitiveQueryString(java.lang.String)
//  .timeouts(GoogleSecureSourceManagerHookTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.hookId">hookId</a></code> | <code>java.lang.String</code> | The ID for the Hook. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location for the Repository. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.repositoryId">repositoryId</a></code> | <code>java.lang.String</code> | The ID for the Repository. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.targetUri">targetUri</a></code> | <code>java.lang.String</code> | The target URI to which the payloads will be delivered. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Determines if the hook disabled or not. Set to true to stop sending traffic. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.events">events</a></code> | <code>java.util.List<java.lang.String></code> | The events that trigger hook on. Possible values: ["PUSH", "PULL_REQUEST"]. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_hook#id GoogleSecureSourceManagerHook#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_hook#project GoogleSecureSourceManagerHook#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.pushOption">pushOption</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOption">GoogleSecureSourceManagerHookPushOption</a></code> | push_option block. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.sensitiveQueryString">sensitiveQueryString</a></code> | <code>java.lang.String</code> | The sensitive query string to be appended to the target URI. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeouts">GoogleSecureSourceManagerHookTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `hookId`<sup>Required</sup> <a name="hookId" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.hookId"></a>

```java
public java.lang.String getHookId();
```

- *Type:* java.lang.String

The ID for the Hook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_hook#hook_id GoogleSecureSourceManagerHook#hook_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location for the Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_hook#location GoogleSecureSourceManagerHook#location}

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.repositoryId"></a>

```java
public java.lang.String getRepositoryId();
```

- *Type:* java.lang.String

The ID for the Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_hook#repository_id GoogleSecureSourceManagerHook#repository_id}

---

##### `targetUri`<sup>Required</sup> <a name="targetUri" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.targetUri"></a>

```java
public java.lang.String getTargetUri();
```

- *Type:* java.lang.String

The target URI to which the payloads will be delivered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_hook#target_uri GoogleSecureSourceManagerHook#target_uri}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_hook#deletion_policy GoogleSecureSourceManagerHook#deletion_policy}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Determines if the hook disabled or not. Set to true to stop sending traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_hook#disabled GoogleSecureSourceManagerHook#disabled}

---

##### `events`<sup>Optional</sup> <a name="events" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.events"></a>

```java
public java.util.List<java.lang.String> getEvents();
```

- *Type:* java.util.List<java.lang.String>

The events that trigger hook on. Possible values: ["PUSH", "PULL_REQUEST"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_hook#events GoogleSecureSourceManagerHook#events}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_hook#id GoogleSecureSourceManagerHook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_hook#project GoogleSecureSourceManagerHook#project}.

---

##### `pushOption`<sup>Optional</sup> <a name="pushOption" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.pushOption"></a>

```java
public GoogleSecureSourceManagerHookPushOption getPushOption();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOption">GoogleSecureSourceManagerHookPushOption</a>

push_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_hook#push_option GoogleSecureSourceManagerHook#push_option}

---

##### `sensitiveQueryString`<sup>Optional</sup> <a name="sensitiveQueryString" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.sensitiveQueryString"></a>

```java
public java.lang.String getSensitiveQueryString();
```

- *Type:* java.lang.String

The sensitive query string to be appended to the target URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_hook#sensitive_query_string GoogleSecureSourceManagerHook#sensitive_query_string}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookConfig.property.timeouts"></a>

```java
public GoogleSecureSourceManagerHookTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeouts">GoogleSecureSourceManagerHookTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_hook#timeouts GoogleSecureSourceManagerHook#timeouts}

---

### GoogleSecureSourceManagerHookPushOption <a name="GoogleSecureSourceManagerHookPushOption" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOption.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_secure_source_manager_hook.GoogleSecureSourceManagerHookPushOption;

GoogleSecureSourceManagerHookPushOption.builder()
//  .branchFilter(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOption.property.branchFilter">branchFilter</a></code> | <code>java.lang.String</code> | Trigger hook for matching branches only. |

---

##### `branchFilter`<sup>Optional</sup> <a name="branchFilter" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOption.property.branchFilter"></a>

```java
public java.lang.String getBranchFilter();
```

- *Type:* java.lang.String

Trigger hook for matching branches only.

Specified as glob pattern. If empty or *, events for all branches are
reported. Examples: main, {main,release*}.
See https://pkg.go.dev/github.com/gobwas/glob documentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_hook#branch_filter GoogleSecureSourceManagerHook#branch_filter}

---

### GoogleSecureSourceManagerHookTimeouts <a name="GoogleSecureSourceManagerHookTimeouts" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_secure_source_manager_hook.GoogleSecureSourceManagerHookTimeouts;

GoogleSecureSourceManagerHookTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_hook#create GoogleSecureSourceManagerHook#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_hook#delete GoogleSecureSourceManagerHook#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_hook#update GoogleSecureSourceManagerHook#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_hook#create GoogleSecureSourceManagerHook#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_hook#delete GoogleSecureSourceManagerHook#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_secure_source_manager_hook#update GoogleSecureSourceManagerHook#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSecureSourceManagerHookPushOptionOutputReference <a name="GoogleSecureSourceManagerHookPushOptionOutputReference" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_secure_source_manager_hook.GoogleSecureSourceManagerHookPushOptionOutputReference;

new GoogleSecureSourceManagerHookPushOptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.resetBranchFilter">resetBranchFilter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBranchFilter` <a name="resetBranchFilter" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.resetBranchFilter"></a>

```java
public void resetBranchFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.property.branchFilterInput">branchFilterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.property.branchFilter">branchFilter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOption">GoogleSecureSourceManagerHookPushOption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `branchFilterInput`<sup>Optional</sup> <a name="branchFilterInput" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.property.branchFilterInput"></a>

```java
public java.lang.String getBranchFilterInput();
```

- *Type:* java.lang.String

---

##### `branchFilter`<sup>Required</sup> <a name="branchFilter" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.property.branchFilter"></a>

```java
public java.lang.String getBranchFilter();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOptionOutputReference.property.internalValue"></a>

```java
public GoogleSecureSourceManagerHookPushOption getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookPushOption">GoogleSecureSourceManagerHookPushOption</a>

---


### GoogleSecureSourceManagerHookTimeoutsOutputReference <a name="GoogleSecureSourceManagerHookTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_secure_source_manager_hook.GoogleSecureSourceManagerHookTimeoutsOutputReference;

new GoogleSecureSourceManagerHookTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeouts">GoogleSecureSourceManagerHookTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleSecureSourceManagerHookTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleSecureSourceManagerHook.GoogleSecureSourceManagerHookTimeouts">GoogleSecureSourceManagerHookTimeouts</a>

---



