# `googleLoggingSavedQuery` Submodule <a name="`googleLoggingSavedQuery` Submodule" id="@cdktn/provider-google-beta.googleLoggingSavedQuery"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleLoggingSavedQuery <a name="GoogleLoggingSavedQuery" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_logging_saved_query google_logging_saved_query}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_logging_saved_query.GoogleLoggingSavedQuery;

GoogleLoggingSavedQuery.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .displayName(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .parent(java.lang.String)
    .visibility(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .loggingQuery(GoogleLoggingSavedQueryLoggingQuery)
//  .opsAnalyticsQuery(GoogleLoggingSavedQueryOpsAnalyticsQuery)
//  .timeouts(GoogleLoggingSavedQueryTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The user-visible display name of the saved query. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the resource see [supported regions](https://docs.cloud.google.com/logging/docs/region-support#bucket-regions). |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the saved query. For example: 'my-saved-query'. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.parent">parent</a></code> | <code>java.lang.String</code> | The parent of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.visibility">visibility</a></code> | <code>java.lang.String</code> | The visibility of the saved query. Possible values: ["SHARED", "PRIVATE"]. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description of the saved query. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_logging_saved_query#id GoogleLoggingSavedQuery#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.loggingQuery">loggingQuery</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery">GoogleLoggingSavedQueryLoggingQuery</a></code> | logging_query block. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.opsAnalyticsQuery">opsAnalyticsQuery</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQuery">GoogleLoggingSavedQueryOpsAnalyticsQuery</a></code> | ops_analytics_query block. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts">GoogleLoggingSavedQueryTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The user-visible display name of the saved query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_logging_saved_query#display_name GoogleLoggingSavedQuery#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the resource see [supported regions](https://docs.cloud.google.com/logging/docs/region-support#bucket-regions).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_logging_saved_query#location GoogleLoggingSavedQuery#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the saved query. For example: 'my-saved-query'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_logging_saved_query#name GoogleLoggingSavedQuery#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.parent"></a>

- *Type:* java.lang.String

The parent of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_logging_saved_query#parent GoogleLoggingSavedQuery#parent}

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.visibility"></a>

- *Type:* java.lang.String

The visibility of the saved query. Possible values: ["SHARED", "PRIVATE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_logging_saved_query#visibility GoogleLoggingSavedQuery#visibility}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_logging_saved_query#deletion_policy GoogleLoggingSavedQuery#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description of the saved query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_logging_saved_query#description GoogleLoggingSavedQuery#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_logging_saved_query#id GoogleLoggingSavedQuery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `loggingQuery`<sup>Optional</sup> <a name="loggingQuery" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.loggingQuery"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery">GoogleLoggingSavedQueryLoggingQuery</a>

logging_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_logging_saved_query#logging_query GoogleLoggingSavedQuery#logging_query}

---

##### `opsAnalyticsQuery`<sup>Optional</sup> <a name="opsAnalyticsQuery" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.opsAnalyticsQuery"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQuery">GoogleLoggingSavedQueryOpsAnalyticsQuery</a>

ops_analytics_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_logging_saved_query#ops_analytics_query GoogleLoggingSavedQuery#ops_analytics_query}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts">GoogleLoggingSavedQueryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_logging_saved_query#timeouts GoogleLoggingSavedQuery#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.putLoggingQuery">putLoggingQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.putOpsAnalyticsQuery">putOpsAnalyticsQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.resetLoggingQuery">resetLoggingQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.resetOpsAnalyticsQuery">resetOpsAnalyticsQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLoggingQuery` <a name="putLoggingQuery" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.putLoggingQuery"></a>

```java
public void putLoggingQuery(GoogleLoggingSavedQueryLoggingQuery value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.putLoggingQuery.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery">GoogleLoggingSavedQueryLoggingQuery</a>

---

##### `putOpsAnalyticsQuery` <a name="putOpsAnalyticsQuery" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.putOpsAnalyticsQuery"></a>

```java
public void putOpsAnalyticsQuery(GoogleLoggingSavedQueryOpsAnalyticsQuery value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.putOpsAnalyticsQuery.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQuery">GoogleLoggingSavedQueryOpsAnalyticsQuery</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.putTimeouts"></a>

```java
public void putTimeouts(GoogleLoggingSavedQueryTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts">GoogleLoggingSavedQueryTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.resetId"></a>

```java
public void resetId()
```

##### `resetLoggingQuery` <a name="resetLoggingQuery" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.resetLoggingQuery"></a>

```java
public void resetLoggingQuery()
```

##### `resetOpsAnalyticsQuery` <a name="resetOpsAnalyticsQuery" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.resetOpsAnalyticsQuery"></a>

```java
public void resetOpsAnalyticsQuery()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleLoggingSavedQuery resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_logging_saved_query.GoogleLoggingSavedQuery;

GoogleLoggingSavedQuery.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_logging_saved_query.GoogleLoggingSavedQuery;

GoogleLoggingSavedQuery.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_logging_saved_query.GoogleLoggingSavedQuery;

GoogleLoggingSavedQuery.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_logging_saved_query.GoogleLoggingSavedQuery;

GoogleLoggingSavedQuery.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleLoggingSavedQuery.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleLoggingSavedQuery resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleLoggingSavedQuery to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleLoggingSavedQuery that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_logging_saved_query#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleLoggingSavedQuery to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.loggingQuery">loggingQuery</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference">GoogleLoggingSavedQueryLoggingQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.opsAnalyticsQuery">opsAnalyticsQuery</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference">GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference">GoogleLoggingSavedQueryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.loggingQueryInput">loggingQueryInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery">GoogleLoggingSavedQueryLoggingQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.opsAnalyticsQueryInput">opsAnalyticsQueryInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQuery">GoogleLoggingSavedQueryOpsAnalyticsQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts">GoogleLoggingSavedQueryTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.visibilityInput">visibilityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.visibility">visibility</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `loggingQuery`<sup>Required</sup> <a name="loggingQuery" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.loggingQuery"></a>

```java
public GoogleLoggingSavedQueryLoggingQueryOutputReference getLoggingQuery();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference">GoogleLoggingSavedQueryLoggingQueryOutputReference</a>

---

##### `opsAnalyticsQuery`<sup>Required</sup> <a name="opsAnalyticsQuery" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.opsAnalyticsQuery"></a>

```java
public GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference getOpsAnalyticsQuery();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference">GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.timeouts"></a>

```java
public GoogleLoggingSavedQueryTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference">GoogleLoggingSavedQueryTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `loggingQueryInput`<sup>Optional</sup> <a name="loggingQueryInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.loggingQueryInput"></a>

```java
public GoogleLoggingSavedQueryLoggingQuery getLoggingQueryInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery">GoogleLoggingSavedQueryLoggingQuery</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `opsAnalyticsQueryInput`<sup>Optional</sup> <a name="opsAnalyticsQueryInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.opsAnalyticsQueryInput"></a>

```java
public GoogleLoggingSavedQueryOpsAnalyticsQuery getOpsAnalyticsQueryInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQuery">GoogleLoggingSavedQueryOpsAnalyticsQuery</a>

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.timeoutsInput"></a>

```java
public IResolvable|GoogleLoggingSavedQueryTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts">GoogleLoggingSavedQueryTimeouts</a>

---

##### `visibilityInput`<sup>Optional</sup> <a name="visibilityInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.visibilityInput"></a>

```java
public java.lang.String getVisibilityInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.visibility"></a>

```java
public java.lang.String getVisibility();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleLoggingSavedQueryConfig <a name="GoogleLoggingSavedQueryConfig" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_logging_saved_query.GoogleLoggingSavedQueryConfig;

GoogleLoggingSavedQueryConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .displayName(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .parent(java.lang.String)
    .visibility(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .loggingQuery(GoogleLoggingSavedQueryLoggingQuery)
//  .opsAnalyticsQuery(GoogleLoggingSavedQueryOpsAnalyticsQuery)
//  .timeouts(GoogleLoggingSavedQueryTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The user-visible display name of the saved query. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the resource see [supported regions](https://docs.cloud.google.com/logging/docs/region-support#bucket-regions). |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the saved query. For example: 'my-saved-query'. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | The parent of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.visibility">visibility</a></code> | <code>java.lang.String</code> | The visibility of the saved query. Possible values: ["SHARED", "PRIVATE"]. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description of the saved query. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_logging_saved_query#id GoogleLoggingSavedQuery#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.loggingQuery">loggingQuery</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery">GoogleLoggingSavedQueryLoggingQuery</a></code> | logging_query block. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.opsAnalyticsQuery">opsAnalyticsQuery</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQuery">GoogleLoggingSavedQueryOpsAnalyticsQuery</a></code> | ops_analytics_query block. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts">GoogleLoggingSavedQueryTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The user-visible display name of the saved query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_logging_saved_query#display_name GoogleLoggingSavedQuery#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the resource see [supported regions](https://docs.cloud.google.com/logging/docs/region-support#bucket-regions).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_logging_saved_query#location GoogleLoggingSavedQuery#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the saved query. For example: 'my-saved-query'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_logging_saved_query#name GoogleLoggingSavedQuery#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

The parent of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_logging_saved_query#parent GoogleLoggingSavedQuery#parent}

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.visibility"></a>

```java
public java.lang.String getVisibility();
```

- *Type:* java.lang.String

The visibility of the saved query. Possible values: ["SHARED", "PRIVATE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_logging_saved_query#visibility GoogleLoggingSavedQuery#visibility}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_logging_saved_query#deletion_policy GoogleLoggingSavedQuery#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description of the saved query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_logging_saved_query#description GoogleLoggingSavedQuery#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_logging_saved_query#id GoogleLoggingSavedQuery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `loggingQuery`<sup>Optional</sup> <a name="loggingQuery" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.loggingQuery"></a>

```java
public GoogleLoggingSavedQueryLoggingQuery getLoggingQuery();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery">GoogleLoggingSavedQueryLoggingQuery</a>

logging_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_logging_saved_query#logging_query GoogleLoggingSavedQuery#logging_query}

---

##### `opsAnalyticsQuery`<sup>Optional</sup> <a name="opsAnalyticsQuery" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.opsAnalyticsQuery"></a>

```java
public GoogleLoggingSavedQueryOpsAnalyticsQuery getOpsAnalyticsQuery();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQuery">GoogleLoggingSavedQueryOpsAnalyticsQuery</a>

ops_analytics_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_logging_saved_query#ops_analytics_query GoogleLoggingSavedQuery#ops_analytics_query}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.timeouts"></a>

```java
public GoogleLoggingSavedQueryTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts">GoogleLoggingSavedQueryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_logging_saved_query#timeouts GoogleLoggingSavedQuery#timeouts}

---

### GoogleLoggingSavedQueryLoggingQuery <a name="GoogleLoggingSavedQueryLoggingQuery" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_logging_saved_query.GoogleLoggingSavedQueryLoggingQuery;

GoogleLoggingSavedQueryLoggingQuery.builder()
    .filter(java.lang.String)
//  .summaryFieldEnd(java.lang.Number)
//  .summaryFields(IResolvable|java.util.List<GoogleLoggingSavedQueryLoggingQuerySummaryFields>)
//  .summaryFieldStart(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery.property.filter">filter</a></code> | <code>java.lang.String</code> | An [advanced logs filter](https://cloud.google.com/logging/docs/view/advanced-filters) which is used to match log entries. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery.property.summaryFieldEnd">summaryFieldEnd</a></code> | <code>java.lang.Number</code> | Characters will be counted from the end of the string. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery.property.summaryFields">summaryFields</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFields">GoogleLoggingSavedQueryLoggingQuerySummaryFields</a>></code> | summary_fields block. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery.property.summaryFieldStart">summaryFieldStart</a></code> | <code>java.lang.Number</code> | Characters will be counted from the start of the string. |

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

An [advanced logs filter](https://cloud.google.com/logging/docs/view/advanced-filters) which is used to match log entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_logging_saved_query#filter GoogleLoggingSavedQuery#filter}

---

##### `summaryFieldEnd`<sup>Optional</sup> <a name="summaryFieldEnd" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery.property.summaryFieldEnd"></a>

```java
public java.lang.Number getSummaryFieldEnd();
```

- *Type:* java.lang.Number

Characters will be counted from the end of the string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_logging_saved_query#summary_field_end GoogleLoggingSavedQuery#summary_field_end}

---

##### `summaryFields`<sup>Optional</sup> <a name="summaryFields" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery.property.summaryFields"></a>

```java
public IResolvable|java.util.List<GoogleLoggingSavedQueryLoggingQuerySummaryFields> getSummaryFields();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFields">GoogleLoggingSavedQueryLoggingQuerySummaryFields</a>>

summary_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_logging_saved_query#summary_fields GoogleLoggingSavedQuery#summary_fields}

---

##### `summaryFieldStart`<sup>Optional</sup> <a name="summaryFieldStart" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery.property.summaryFieldStart"></a>

```java
public java.lang.Number getSummaryFieldStart();
```

- *Type:* java.lang.Number

Characters will be counted from the start of the string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_logging_saved_query#summary_field_start GoogleLoggingSavedQuery#summary_field_start}

---

### GoogleLoggingSavedQueryLoggingQuerySummaryFields <a name="GoogleLoggingSavedQueryLoggingQuerySummaryFields" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFields.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_logging_saved_query.GoogleLoggingSavedQueryLoggingQuerySummaryFields;

GoogleLoggingSavedQueryLoggingQuerySummaryFields.builder()
//  .field(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFields.property.field">field</a></code> | <code>java.lang.String</code> | The field from the LogEntry to include in the summary line. |

---

##### `field`<sup>Optional</sup> <a name="field" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFields.property.field"></a>

```java
public java.lang.String getField();
```

- *Type:* java.lang.String

The field from the LogEntry to include in the summary line.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_logging_saved_query#field GoogleLoggingSavedQuery#field}

---

### GoogleLoggingSavedQueryOpsAnalyticsQuery <a name="GoogleLoggingSavedQueryOpsAnalyticsQuery" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQuery.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_logging_saved_query.GoogleLoggingSavedQueryOpsAnalyticsQuery;

GoogleLoggingSavedQueryOpsAnalyticsQuery.builder()
    .sqlQueryText(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQuery.property.sqlQueryText">sqlQueryText</a></code> | <code>java.lang.String</code> | A logs analytics SQL query, which generally follows BigQuery format. |

---

##### `sqlQueryText`<sup>Required</sup> <a name="sqlQueryText" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQuery.property.sqlQueryText"></a>

```java
public java.lang.String getSqlQueryText();
```

- *Type:* java.lang.String

A logs analytics SQL query, which generally follows BigQuery format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_logging_saved_query#sql_query_text GoogleLoggingSavedQuery#sql_query_text}

---

### GoogleLoggingSavedQueryTimeouts <a name="GoogleLoggingSavedQueryTimeouts" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_logging_saved_query.GoogleLoggingSavedQueryTimeouts;

GoogleLoggingSavedQueryTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_logging_saved_query#create GoogleLoggingSavedQuery#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_logging_saved_query#delete GoogleLoggingSavedQuery#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_logging_saved_query#update GoogleLoggingSavedQuery#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_logging_saved_query#create GoogleLoggingSavedQuery#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_logging_saved_query#delete GoogleLoggingSavedQuery#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_logging_saved_query#update GoogleLoggingSavedQuery#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleLoggingSavedQueryLoggingQueryOutputReference <a name="GoogleLoggingSavedQueryLoggingQueryOutputReference" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_logging_saved_query.GoogleLoggingSavedQueryLoggingQueryOutputReference;

new GoogleLoggingSavedQueryLoggingQueryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.putSummaryFields">putSummaryFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.resetSummaryFieldEnd">resetSummaryFieldEnd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.resetSummaryFields">resetSummaryFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.resetSummaryFieldStart">resetSummaryFieldStart</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSummaryFields` <a name="putSummaryFields" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.putSummaryFields"></a>

```java
public void putSummaryFields(IResolvable|java.util.List<GoogleLoggingSavedQueryLoggingQuerySummaryFields> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.putSummaryFields.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFields">GoogleLoggingSavedQueryLoggingQuerySummaryFields</a>>

---

##### `resetSummaryFieldEnd` <a name="resetSummaryFieldEnd" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.resetSummaryFieldEnd"></a>

```java
public void resetSummaryFieldEnd()
```

##### `resetSummaryFields` <a name="resetSummaryFields" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.resetSummaryFields"></a>

```java
public void resetSummaryFields()
```

##### `resetSummaryFieldStart` <a name="resetSummaryFieldStart" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.resetSummaryFieldStart"></a>

```java
public void resetSummaryFieldStart()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.summaryFields">summaryFields</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList">GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.filterInput">filterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldEndInput">summaryFieldEndInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldsInput">summaryFieldsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFields">GoogleLoggingSavedQueryLoggingQuerySummaryFields</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldStartInput">summaryFieldStartInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.filter">filter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldEnd">summaryFieldEnd</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldStart">summaryFieldStart</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery">GoogleLoggingSavedQueryLoggingQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `summaryFields`<sup>Required</sup> <a name="summaryFields" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.summaryFields"></a>

```java
public GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList getSummaryFields();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList">GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.filterInput"></a>

```java
public java.lang.String getFilterInput();
```

- *Type:* java.lang.String

---

##### `summaryFieldEndInput`<sup>Optional</sup> <a name="summaryFieldEndInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldEndInput"></a>

```java
public java.lang.Number getSummaryFieldEndInput();
```

- *Type:* java.lang.Number

---

##### `summaryFieldsInput`<sup>Optional</sup> <a name="summaryFieldsInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldsInput"></a>

```java
public IResolvable|java.util.List<GoogleLoggingSavedQueryLoggingQuerySummaryFields> getSummaryFieldsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFields">GoogleLoggingSavedQueryLoggingQuerySummaryFields</a>>

---

##### `summaryFieldStartInput`<sup>Optional</sup> <a name="summaryFieldStartInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldStartInput"></a>

```java
public java.lang.Number getSummaryFieldStartInput();
```

- *Type:* java.lang.Number

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

---

##### `summaryFieldEnd`<sup>Required</sup> <a name="summaryFieldEnd" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldEnd"></a>

```java
public java.lang.Number getSummaryFieldEnd();
```

- *Type:* java.lang.Number

---

##### `summaryFieldStart`<sup>Required</sup> <a name="summaryFieldStart" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldStart"></a>

```java
public java.lang.Number getSummaryFieldStart();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.internalValue"></a>

```java
public GoogleLoggingSavedQueryLoggingQuery getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery">GoogleLoggingSavedQueryLoggingQuery</a>

---


### GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList <a name="GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_logging_saved_query.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList;

new GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.get"></a>

```java
public GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFields">GoogleLoggingSavedQueryLoggingQuerySummaryFields</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleLoggingSavedQueryLoggingQuerySummaryFields> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFields">GoogleLoggingSavedQueryLoggingQuerySummaryFields</a>>

---


### GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference <a name="GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_logging_saved_query.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference;

new GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.resetField">resetField</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetField` <a name="resetField" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.resetField"></a>

```java
public void resetField()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.fieldInput">fieldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.field">field</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFields">GoogleLoggingSavedQueryLoggingQuerySummaryFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fieldInput`<sup>Optional</sup> <a name="fieldInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.fieldInput"></a>

```java
public java.lang.String getFieldInput();
```

- *Type:* java.lang.String

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.field"></a>

```java
public java.lang.String getField();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleLoggingSavedQueryLoggingQuerySummaryFields getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFields">GoogleLoggingSavedQueryLoggingQuerySummaryFields</a>

---


### GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference <a name="GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_logging_saved_query.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference;

new GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.property.sqlQueryTextInput">sqlQueryTextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.property.sqlQueryText">sqlQueryText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQuery">GoogleLoggingSavedQueryOpsAnalyticsQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sqlQueryTextInput`<sup>Optional</sup> <a name="sqlQueryTextInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.property.sqlQueryTextInput"></a>

```java
public java.lang.String getSqlQueryTextInput();
```

- *Type:* java.lang.String

---

##### `sqlQueryText`<sup>Required</sup> <a name="sqlQueryText" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.property.sqlQueryText"></a>

```java
public java.lang.String getSqlQueryText();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.property.internalValue"></a>

```java
public GoogleLoggingSavedQueryOpsAnalyticsQuery getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQuery">GoogleLoggingSavedQueryOpsAnalyticsQuery</a>

---


### GoogleLoggingSavedQueryTimeoutsOutputReference <a name="GoogleLoggingSavedQueryTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_logging_saved_query.GoogleLoggingSavedQueryTimeoutsOutputReference;

new GoogleLoggingSavedQueryTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts">GoogleLoggingSavedQueryTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleLoggingSavedQueryTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts">GoogleLoggingSavedQueryTimeouts</a>

---



