# `googleLoggingOrganizationSink` Submodule <a name="`googleLoggingOrganizationSink` Submodule" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleLoggingOrganizationSink <a name="GoogleLoggingOrganizationSink" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_logging_organization_sink google_logging_organization_sink}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_logging_organization_sink.GoogleLoggingOrganizationSink;

GoogleLoggingOrganizationSink.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .destination(java.lang.String)
    .name(java.lang.String)
    .orgId(java.lang.String)
//  .bigqueryOptions(GoogleLoggingOrganizationSinkBigqueryOptions)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .disabled(java.lang.Boolean|IResolvable)
//  .exclusions(IResolvable|java.util.List<GoogleLoggingOrganizationSinkExclusions>)
//  .filter(java.lang.String)
//  .id(java.lang.String)
//  .includeChildren(java.lang.Boolean|IResolvable)
//  .interceptChildren(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.destination">destination</a></code> | <code>java.lang.String</code> | The destination of the sink (or, in other words, where logs are written to). |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the logging sink. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.orgId">orgId</a></code> | <code>java.lang.String</code> | The numeric ID of the organization to be exported to the sink. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.bigqueryOptions">bigqueryOptions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptions">GoogleLoggingOrganizationSinkBigqueryOptions</a></code> | bigquery_options block. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description of this sink. The maximum length of the description is 8000 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set to True, then this sink is disabled and it does not export any log entries. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.exclusions">exclusions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusions">GoogleLoggingOrganizationSinkExclusions</a>></code> | exclusions block. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.filter">filter</a></code> | <code>java.lang.String</code> | The filter to apply when exporting logs. Only log entries that match the filter are exported. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_logging_organization_sink#id GoogleLoggingOrganizationSink#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.includeChildren">includeChildren</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether or not to include child folders or projects in the sink export. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.interceptChildren">interceptChildren</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether or not to intercept logs from child projects. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.destination"></a>

- *Type:* java.lang.String

The destination of the sink (or, in other words, where logs are written to).

Can be a Cloud Storage bucket, a PubSub topic, or a BigQuery dataset. Examples: "storage.googleapis.com/[GCS_BUCKET]" "bigquery.googleapis.com/projects/[PROJECT_ID]/datasets/[DATASET]" "pubsub.googleapis.com/projects/[PROJECT_ID]/topics/[TOPIC_ID]" The writer associated with the sink must have access to write to the above resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_logging_organization_sink#destination GoogleLoggingOrganizationSink#destination}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the logging sink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_logging_organization_sink#name GoogleLoggingOrganizationSink#name}

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.orgId"></a>

- *Type:* java.lang.String

The numeric ID of the organization to be exported to the sink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_logging_organization_sink#org_id GoogleLoggingOrganizationSink#org_id}

---

##### `bigqueryOptions`<sup>Optional</sup> <a name="bigqueryOptions" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.bigqueryOptions"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptions">GoogleLoggingOrganizationSinkBigqueryOptions</a>

bigquery_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_logging_organization_sink#bigquery_options GoogleLoggingOrganizationSink#bigquery_options}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_logging_organization_sink#deletion_policy GoogleLoggingOrganizationSink#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description of this sink. The maximum length of the description is 8000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_logging_organization_sink#description GoogleLoggingOrganizationSink#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.disabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set to True, then this sink is disabled and it does not export any log entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_logging_organization_sink#disabled GoogleLoggingOrganizationSink#disabled}

---

##### `exclusions`<sup>Optional</sup> <a name="exclusions" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.exclusions"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusions">GoogleLoggingOrganizationSinkExclusions</a>>

exclusions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_logging_organization_sink#exclusions GoogleLoggingOrganizationSink#exclusions}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.filter"></a>

- *Type:* java.lang.String

The filter to apply when exporting logs. Only log entries that match the filter are exported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_logging_organization_sink#filter GoogleLoggingOrganizationSink#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_logging_organization_sink#id GoogleLoggingOrganizationSink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includeChildren`<sup>Optional</sup> <a name="includeChildren" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.includeChildren"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether or not to include child folders or projects in the sink export.

If true, logs associated with child projects are also exported; otherwise only logs relating to the provided organization are included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_logging_organization_sink#include_children GoogleLoggingOrganizationSink#include_children}

---

##### `interceptChildren`<sup>Optional</sup> <a name="interceptChildren" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.Initializer.parameter.interceptChildren"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether or not to intercept logs from child projects.

If true, matching logs will not match with sinks in child resources, except _Required sinks. This sink will be visible to child resources when listing sinks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_logging_organization_sink#intercept_children GoogleLoggingOrganizationSink#intercept_children}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.putBigqueryOptions">putBigqueryOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.putExclusions">putExclusions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.resetBigqueryOptions">resetBigqueryOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.resetExclusions">resetExclusions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.resetIncludeChildren">resetIncludeChildren</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.resetInterceptChildren">resetInterceptChildren</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBigqueryOptions` <a name="putBigqueryOptions" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.putBigqueryOptions"></a>

```java
public void putBigqueryOptions(GoogleLoggingOrganizationSinkBigqueryOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.putBigqueryOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptions">GoogleLoggingOrganizationSinkBigqueryOptions</a>

---

##### `putExclusions` <a name="putExclusions" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.putExclusions"></a>

```java
public void putExclusions(IResolvable|java.util.List<GoogleLoggingOrganizationSinkExclusions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.putExclusions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusions">GoogleLoggingOrganizationSinkExclusions</a>>

---

##### `resetBigqueryOptions` <a name="resetBigqueryOptions" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.resetBigqueryOptions"></a>

```java
public void resetBigqueryOptions()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.resetDisabled"></a>

```java
public void resetDisabled()
```

##### `resetExclusions` <a name="resetExclusions" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.resetExclusions"></a>

```java
public void resetExclusions()
```

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.resetId"></a>

```java
public void resetId()
```

##### `resetIncludeChildren` <a name="resetIncludeChildren" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.resetIncludeChildren"></a>

```java
public void resetIncludeChildren()
```

##### `resetInterceptChildren` <a name="resetInterceptChildren" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.resetInterceptChildren"></a>

```java
public void resetInterceptChildren()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleLoggingOrganizationSink resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_logging_organization_sink.GoogleLoggingOrganizationSink;

GoogleLoggingOrganizationSink.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_logging_organization_sink.GoogleLoggingOrganizationSink;

GoogleLoggingOrganizationSink.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_logging_organization_sink.GoogleLoggingOrganizationSink;

GoogleLoggingOrganizationSink.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_logging_organization_sink.GoogleLoggingOrganizationSink;

GoogleLoggingOrganizationSink.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleLoggingOrganizationSink.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleLoggingOrganizationSink resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleLoggingOrganizationSink to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleLoggingOrganizationSink that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_logging_organization_sink#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleLoggingOrganizationSink to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.bigqueryOptions">bigqueryOptions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference">GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.exclusions">exclusions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList">GoogleLoggingOrganizationSinkExclusionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.writerIdentity">writerIdentity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.bigqueryOptionsInput">bigqueryOptionsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptions">GoogleLoggingOrganizationSinkBigqueryOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.destinationInput">destinationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.exclusionsInput">exclusionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusions">GoogleLoggingOrganizationSinkExclusions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.filterInput">filterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.includeChildrenInput">includeChildrenInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.interceptChildrenInput">interceptChildrenInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.orgIdInput">orgIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.destination">destination</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.filter">filter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.includeChildren">includeChildren</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.interceptChildren">interceptChildren</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.orgId">orgId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `bigqueryOptions`<sup>Required</sup> <a name="bigqueryOptions" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.bigqueryOptions"></a>

```java
public GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference getBigqueryOptions();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference">GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference</a>

---

##### `exclusions`<sup>Required</sup> <a name="exclusions" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.exclusions"></a>

```java
public GoogleLoggingOrganizationSinkExclusionsList getExclusions();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList">GoogleLoggingOrganizationSinkExclusionsList</a>

---

##### `writerIdentity`<sup>Required</sup> <a name="writerIdentity" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.writerIdentity"></a>

```java
public java.lang.String getWriterIdentity();
```

- *Type:* java.lang.String

---

##### `bigqueryOptionsInput`<sup>Optional</sup> <a name="bigqueryOptionsInput" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.bigqueryOptionsInput"></a>

```java
public GoogleLoggingOrganizationSinkBigqueryOptions getBigqueryOptionsInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptions">GoogleLoggingOrganizationSinkBigqueryOptions</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.destinationInput"></a>

```java
public java.lang.String getDestinationInput();
```

- *Type:* java.lang.String

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.disabledInput"></a>

```java
public java.lang.Boolean|IResolvable getDisabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `exclusionsInput`<sup>Optional</sup> <a name="exclusionsInput" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.exclusionsInput"></a>

```java
public IResolvable|java.util.List<GoogleLoggingOrganizationSinkExclusions> getExclusionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusions">GoogleLoggingOrganizationSinkExclusions</a>>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.filterInput"></a>

```java
public java.lang.String getFilterInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `includeChildrenInput`<sup>Optional</sup> <a name="includeChildrenInput" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.includeChildrenInput"></a>

```java
public java.lang.Boolean|IResolvable getIncludeChildrenInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `interceptChildrenInput`<sup>Optional</sup> <a name="interceptChildrenInput" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.interceptChildrenInput"></a>

```java
public java.lang.Boolean|IResolvable getInterceptChildrenInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `orgIdInput`<sup>Optional</sup> <a name="orgIdInput" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.orgIdInput"></a>

```java
public java.lang.String getOrgIdInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `includeChildren`<sup>Required</sup> <a name="includeChildren" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.includeChildren"></a>

```java
public java.lang.Boolean|IResolvable getIncludeChildren();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `interceptChildren`<sup>Required</sup> <a name="interceptChildren" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.interceptChildren"></a>

```java
public java.lang.Boolean|IResolvable getInterceptChildren();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.orgId"></a>

```java
public java.lang.String getOrgId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSink.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleLoggingOrganizationSinkBigqueryOptions <a name="GoogleLoggingOrganizationSinkBigqueryOptions" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptions.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_logging_organization_sink.GoogleLoggingOrganizationSinkBigqueryOptions;

GoogleLoggingOrganizationSinkBigqueryOptions.builder()
    .usePartitionedTables(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptions.property.usePartitionedTables">usePartitionedTables</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to use BigQuery's partition tables. |

---

##### `usePartitionedTables`<sup>Required</sup> <a name="usePartitionedTables" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptions.property.usePartitionedTables"></a>

```java
public java.lang.Boolean|IResolvable getUsePartitionedTables();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to use BigQuery's partition tables.

By default, Logging creates dated tables based on the log entries' timestamps, e.g. syslog_20170523. With partitioned tables the date suffix is no longer present and special query syntax has to be used instead. In both cases, tables are sharded based on UTC timezone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_logging_organization_sink#use_partitioned_tables GoogleLoggingOrganizationSink#use_partitioned_tables}

---

### GoogleLoggingOrganizationSinkConfig <a name="GoogleLoggingOrganizationSinkConfig" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_logging_organization_sink.GoogleLoggingOrganizationSinkConfig;

GoogleLoggingOrganizationSinkConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .destination(java.lang.String)
    .name(java.lang.String)
    .orgId(java.lang.String)
//  .bigqueryOptions(GoogleLoggingOrganizationSinkBigqueryOptions)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .disabled(java.lang.Boolean|IResolvable)
//  .exclusions(IResolvable|java.util.List<GoogleLoggingOrganizationSinkExclusions>)
//  .filter(java.lang.String)
//  .id(java.lang.String)
//  .includeChildren(java.lang.Boolean|IResolvable)
//  .interceptChildren(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.destination">destination</a></code> | <code>java.lang.String</code> | The destination of the sink (or, in other words, where logs are written to). |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the logging sink. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.orgId">orgId</a></code> | <code>java.lang.String</code> | The numeric ID of the organization to be exported to the sink. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.bigqueryOptions">bigqueryOptions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptions">GoogleLoggingOrganizationSinkBigqueryOptions</a></code> | bigquery_options block. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description of this sink. The maximum length of the description is 8000 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set to True, then this sink is disabled and it does not export any log entries. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.exclusions">exclusions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusions">GoogleLoggingOrganizationSinkExclusions</a>></code> | exclusions block. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.filter">filter</a></code> | <code>java.lang.String</code> | The filter to apply when exporting logs. Only log entries that match the filter are exported. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_logging_organization_sink#id GoogleLoggingOrganizationSink#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.includeChildren">includeChildren</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether or not to include child folders or projects in the sink export. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.interceptChildren">interceptChildren</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether or not to intercept logs from child projects. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

The destination of the sink (or, in other words, where logs are written to).

Can be a Cloud Storage bucket, a PubSub topic, or a BigQuery dataset. Examples: "storage.googleapis.com/[GCS_BUCKET]" "bigquery.googleapis.com/projects/[PROJECT_ID]/datasets/[DATASET]" "pubsub.googleapis.com/projects/[PROJECT_ID]/topics/[TOPIC_ID]" The writer associated with the sink must have access to write to the above resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_logging_organization_sink#destination GoogleLoggingOrganizationSink#destination}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the logging sink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_logging_organization_sink#name GoogleLoggingOrganizationSink#name}

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.orgId"></a>

```java
public java.lang.String getOrgId();
```

- *Type:* java.lang.String

The numeric ID of the organization to be exported to the sink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_logging_organization_sink#org_id GoogleLoggingOrganizationSink#org_id}

---

##### `bigqueryOptions`<sup>Optional</sup> <a name="bigqueryOptions" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.bigqueryOptions"></a>

```java
public GoogleLoggingOrganizationSinkBigqueryOptions getBigqueryOptions();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptions">GoogleLoggingOrganizationSinkBigqueryOptions</a>

bigquery_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_logging_organization_sink#bigquery_options GoogleLoggingOrganizationSink#bigquery_options}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_logging_organization_sink#deletion_policy GoogleLoggingOrganizationSink#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description of this sink. The maximum length of the description is 8000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_logging_organization_sink#description GoogleLoggingOrganizationSink#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set to True, then this sink is disabled and it does not export any log entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_logging_organization_sink#disabled GoogleLoggingOrganizationSink#disabled}

---

##### `exclusions`<sup>Optional</sup> <a name="exclusions" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.exclusions"></a>

```java
public IResolvable|java.util.List<GoogleLoggingOrganizationSinkExclusions> getExclusions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusions">GoogleLoggingOrganizationSinkExclusions</a>>

exclusions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_logging_organization_sink#exclusions GoogleLoggingOrganizationSink#exclusions}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

The filter to apply when exporting logs. Only log entries that match the filter are exported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_logging_organization_sink#filter GoogleLoggingOrganizationSink#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_logging_organization_sink#id GoogleLoggingOrganizationSink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includeChildren`<sup>Optional</sup> <a name="includeChildren" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.includeChildren"></a>

```java
public java.lang.Boolean|IResolvable getIncludeChildren();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether or not to include child folders or projects in the sink export.

If true, logs associated with child projects are also exported; otherwise only logs relating to the provided organization are included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_logging_organization_sink#include_children GoogleLoggingOrganizationSink#include_children}

---

##### `interceptChildren`<sup>Optional</sup> <a name="interceptChildren" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkConfig.property.interceptChildren"></a>

```java
public java.lang.Boolean|IResolvable getInterceptChildren();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether or not to intercept logs from child projects.

If true, matching logs will not match with sinks in child resources, except _Required sinks. This sink will be visible to child resources when listing sinks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_logging_organization_sink#intercept_children GoogleLoggingOrganizationSink#intercept_children}

---

### GoogleLoggingOrganizationSinkExclusions <a name="GoogleLoggingOrganizationSinkExclusions" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusions.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_logging_organization_sink.GoogleLoggingOrganizationSinkExclusions;

GoogleLoggingOrganizationSinkExclusions.builder()
    .filter(java.lang.String)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .disabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusions.property.filter">filter</a></code> | <code>java.lang.String</code> | An advanced logs filter that matches the log entries to be excluded. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusions.property.name">name</a></code> | <code>java.lang.String</code> | A client-assigned identifier, such as "load-balancer-exclusion". |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusions.property.description">description</a></code> | <code>java.lang.String</code> | A description of this exclusion. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusions.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set to True, then this exclusion is disabled and it does not exclude any log entries. |

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusions.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

An advanced logs filter that matches the log entries to be excluded.

By using the sample function, you can exclude less than 100% of the matching log entries

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_logging_organization_sink#filter GoogleLoggingOrganizationSink#filter}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusions.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A client-assigned identifier, such as "load-balancer-exclusion".

Identifiers are limited to 100 characters and can include only letters, digits, underscores, hyphens, and periods. First character has to be alphanumeric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_logging_organization_sink#name GoogleLoggingOrganizationSink#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusions.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description of this exclusion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_logging_organization_sink#description GoogleLoggingOrganizationSink#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusions.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set to True, then this exclusion is disabled and it does not exclude any log entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_logging_organization_sink#disabled GoogleLoggingOrganizationSink#disabled}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference <a name="GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_logging_organization_sink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference;

new GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.property.usePartitionedTablesInput">usePartitionedTablesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.property.usePartitionedTables">usePartitionedTables</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptions">GoogleLoggingOrganizationSinkBigqueryOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `usePartitionedTablesInput`<sup>Optional</sup> <a name="usePartitionedTablesInput" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.property.usePartitionedTablesInput"></a>

```java
public java.lang.Boolean|IResolvable getUsePartitionedTablesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `usePartitionedTables`<sup>Required</sup> <a name="usePartitionedTables" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.property.usePartitionedTables"></a>

```java
public java.lang.Boolean|IResolvable getUsePartitionedTables();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptionsOutputReference.property.internalValue"></a>

```java
public GoogleLoggingOrganizationSinkBigqueryOptions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkBigqueryOptions">GoogleLoggingOrganizationSinkBigqueryOptions</a>

---


### GoogleLoggingOrganizationSinkExclusionsList <a name="GoogleLoggingOrganizationSinkExclusionsList" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_logging_organization_sink.GoogleLoggingOrganizationSinkExclusionsList;

new GoogleLoggingOrganizationSinkExclusionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.get"></a>

```java
public GoogleLoggingOrganizationSinkExclusionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusions">GoogleLoggingOrganizationSinkExclusions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleLoggingOrganizationSinkExclusions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusions">GoogleLoggingOrganizationSinkExclusions</a>>

---


### GoogleLoggingOrganizationSinkExclusionsOutputReference <a name="GoogleLoggingOrganizationSinkExclusionsOutputReference" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_logging_organization_sink.GoogleLoggingOrganizationSinkExclusionsOutputReference;

new GoogleLoggingOrganizationSinkExclusionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.resetDisabled"></a>

```java
public void resetDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.property.filterInput">filterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.property.filter">filter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusions">GoogleLoggingOrganizationSinkExclusions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.property.disabledInput"></a>

```java
public java.lang.Boolean|IResolvable getDisabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.property.filterInput"></a>

```java
public java.lang.String getFilterInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusionsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleLoggingOrganizationSinkExclusions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleLoggingOrganizationSink.GoogleLoggingOrganizationSinkExclusions">GoogleLoggingOrganizationSinkExclusions</a>

---



