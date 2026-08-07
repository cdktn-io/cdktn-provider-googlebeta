# `googleBigqueryAnalyticsHubQueryTemplate` Submodule <a name="`googleBigqueryAnalyticsHubQueryTemplate` Submodule" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBigqueryAnalyticsHubQueryTemplate <a name="GoogleBigqueryAnalyticsHubQueryTemplate" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_bigquery_analytics_hub_query_template google_bigquery_analytics_hub_query_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_bigquery_analytics_hub_query_template.GoogleBigqueryAnalyticsHubQueryTemplate;

GoogleBigqueryAnalyticsHubQueryTemplate.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dataExchangeId(java.lang.String)
    .displayName(java.lang.String)
    .location(java.lang.String)
    .queryTemplateId(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .documentation(java.lang.String)
//  .id(java.lang.String)
//  .primaryContact(java.lang.String)
//  .project(java.lang.String)
//  .routine(GoogleBigqueryAnalyticsHubQueryTemplateRoutine)
//  .submit(java.lang.Boolean|IResolvable)
//  .timeouts(GoogleBigqueryAnalyticsHubQueryTemplateTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.Initializer.parameter.dataExchangeId">dataExchangeId</a></code> | <code>java.lang.String</code> | The ID of the data exchange. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Human-readable display name of the QueryTemplate. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The name of the location this data exchange query template. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.Initializer.parameter.queryTemplateId">queryTemplateId</a></code> | <code>java.lang.String</code> | Unique QueryTemplate ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | This field uses a custom implementation please refer to documentation under /hashicorp/terraform-provider-google-beta/website/docs/r/bigquery_analytics_hub_query_template.html.markdown for specifics. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Short description of the QueryTemplate. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.Initializer.parameter.documentation">documentation</a></code> | <code>java.lang.String</code> | Documentation describing the QueryTemplate. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_bigquery_analytics_hub_query_template#id GoogleBigqueryAnalyticsHubQueryTemplate#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.Initializer.parameter.primaryContact">primaryContact</a></code> | <code>java.lang.String</code> | Email or URL of the primary point of contact of the QueryTemplate. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_bigquery_analytics_hub_query_template#project GoogleBigqueryAnalyticsHubQueryTemplate#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.Initializer.parameter.routine">routine</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutine">GoogleBigqueryAnalyticsHubQueryTemplateRoutine</a></code> | routine block. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.Initializer.parameter.submit">submit</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set to 'true', the QueryTemplate will be submitted for approval and cannot be updated afterwards. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeouts">GoogleBigqueryAnalyticsHubQueryTemplateTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dataExchangeId`<sup>Required</sup> <a name="dataExchangeId" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.Initializer.parameter.dataExchangeId"></a>

- *Type:* java.lang.String

The ID of the data exchange.

Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_bigquery_analytics_hub_query_template#data_exchange_id GoogleBigqueryAnalyticsHubQueryTemplate#data_exchange_id}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Human-readable display name of the QueryTemplate.

The display name must
contain only Unicode letters, numbers (0-9), underscores (_), dashes (-),
spaces ( ), ampersands (&) and can't start or end with spaces. Default
value is an empty string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_bigquery_analytics_hub_query_template#display_name GoogleBigqueryAnalyticsHubQueryTemplate#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The name of the location this data exchange query template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_bigquery_analytics_hub_query_template#location GoogleBigqueryAnalyticsHubQueryTemplate#location}

---

##### `queryTemplateId`<sup>Required</sup> <a name="queryTemplateId" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.Initializer.parameter.queryTemplateId"></a>

- *Type:* java.lang.String

Unique QueryTemplate ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_bigquery_analytics_hub_query_template#query_template_id GoogleBigqueryAnalyticsHubQueryTemplate#query_template_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

This field uses a custom implementation please refer to documentation under /hashicorp/terraform-provider-google-beta/website/docs/r/bigquery_analytics_hub_query_template.html.markdown for specifics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_bigquery_analytics_hub_query_template#deletion_policy GoogleBigqueryAnalyticsHubQueryTemplate#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Short description of the QueryTemplate.

The description must not contain
Unicode non-characters and C0 and C1 control codes except tabs,
new lines, carriage returns, and page breaks.
Default value is an empty string. Max length: 2000 bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_bigquery_analytics_hub_query_template#description GoogleBigqueryAnalyticsHubQueryTemplate#description}

---

##### `documentation`<sup>Optional</sup> <a name="documentation" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.Initializer.parameter.documentation"></a>

- *Type:* java.lang.String

Documentation describing the QueryTemplate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_bigquery_analytics_hub_query_template#documentation GoogleBigqueryAnalyticsHubQueryTemplate#documentation}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_bigquery_analytics_hub_query_template#id GoogleBigqueryAnalyticsHubQueryTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `primaryContact`<sup>Optional</sup> <a name="primaryContact" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.Initializer.parameter.primaryContact"></a>

- *Type:* java.lang.String

Email or URL of the primary point of contact of the QueryTemplate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_bigquery_analytics_hub_query_template#primary_contact GoogleBigqueryAnalyticsHubQueryTemplate#primary_contact}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_bigquery_analytics_hub_query_template#project GoogleBigqueryAnalyticsHubQueryTemplate#project}.

---

##### `routine`<sup>Optional</sup> <a name="routine" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.Initializer.parameter.routine"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutine">GoogleBigqueryAnalyticsHubQueryTemplateRoutine</a>

routine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_bigquery_analytics_hub_query_template#routine GoogleBigqueryAnalyticsHubQueryTemplate#routine}

---

##### `submit`<sup>Optional</sup> <a name="submit" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.Initializer.parameter.submit"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set to 'true', the QueryTemplate will be submitted for approval and cannot be updated afterwards.

This is a one-time action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_bigquery_analytics_hub_query_template#submit GoogleBigqueryAnalyticsHubQueryTemplate#submit}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeouts">GoogleBigqueryAnalyticsHubQueryTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_bigquery_analytics_hub_query_template#timeouts GoogleBigqueryAnalyticsHubQueryTemplate#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.putRoutine">putRoutine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.resetDocumentation">resetDocumentation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.resetPrimaryContact">resetPrimaryContact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.resetRoutine">resetRoutine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.resetSubmit">resetSubmit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRoutine` <a name="putRoutine" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.putRoutine"></a>

```java
public void putRoutine(GoogleBigqueryAnalyticsHubQueryTemplateRoutine value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.putRoutine.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutine">GoogleBigqueryAnalyticsHubQueryTemplateRoutine</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.putTimeouts"></a>

```java
public void putTimeouts(GoogleBigqueryAnalyticsHubQueryTemplateTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeouts">GoogleBigqueryAnalyticsHubQueryTemplateTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDocumentation` <a name="resetDocumentation" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.resetDocumentation"></a>

```java
public void resetDocumentation()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.resetId"></a>

```java
public void resetId()
```

##### `resetPrimaryContact` <a name="resetPrimaryContact" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.resetPrimaryContact"></a>

```java
public void resetPrimaryContact()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.resetProject"></a>

```java
public void resetProject()
```

##### `resetRoutine` <a name="resetRoutine" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.resetRoutine"></a>

```java
public void resetRoutine()
```

##### `resetSubmit` <a name="resetSubmit" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.resetSubmit"></a>

```java
public void resetSubmit()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleBigqueryAnalyticsHubQueryTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_bigquery_analytics_hub_query_template.GoogleBigqueryAnalyticsHubQueryTemplate;

GoogleBigqueryAnalyticsHubQueryTemplate.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_bigquery_analytics_hub_query_template.GoogleBigqueryAnalyticsHubQueryTemplate;

GoogleBigqueryAnalyticsHubQueryTemplate.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_bigquery_analytics_hub_query_template.GoogleBigqueryAnalyticsHubQueryTemplate;

GoogleBigqueryAnalyticsHubQueryTemplate.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_bigquery_analytics_hub_query_template.GoogleBigqueryAnalyticsHubQueryTemplate;

GoogleBigqueryAnalyticsHubQueryTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleBigqueryAnalyticsHubQueryTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleBigqueryAnalyticsHubQueryTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleBigqueryAnalyticsHubQueryTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleBigqueryAnalyticsHubQueryTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_bigquery_analytics_hub_query_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleBigqueryAnalyticsHubQueryTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.routine">routine</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference">GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference">GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.dataExchangeIdInput">dataExchangeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.documentationInput">documentationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.primaryContactInput">primaryContactInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.queryTemplateIdInput">queryTemplateIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.routineInput">routineInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutine">GoogleBigqueryAnalyticsHubQueryTemplateRoutine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.submitInput">submitInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeouts">GoogleBigqueryAnalyticsHubQueryTemplateTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.dataExchangeId">dataExchangeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.documentation">documentation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.primaryContact">primaryContact</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.queryTemplateId">queryTemplateId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.submit">submit</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `routine`<sup>Required</sup> <a name="routine" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.routine"></a>

```java
public GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference getRoutine();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference">GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.timeouts"></a>

```java
public GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference">GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `dataExchangeIdInput`<sup>Optional</sup> <a name="dataExchangeIdInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.dataExchangeIdInput"></a>

```java
public java.lang.String getDataExchangeIdInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `documentationInput`<sup>Optional</sup> <a name="documentationInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.documentationInput"></a>

```java
public java.lang.String getDocumentationInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `primaryContactInput`<sup>Optional</sup> <a name="primaryContactInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.primaryContactInput"></a>

```java
public java.lang.String getPrimaryContactInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `queryTemplateIdInput`<sup>Optional</sup> <a name="queryTemplateIdInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.queryTemplateIdInput"></a>

```java
public java.lang.String getQueryTemplateIdInput();
```

- *Type:* java.lang.String

---

##### `routineInput`<sup>Optional</sup> <a name="routineInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.routineInput"></a>

```java
public GoogleBigqueryAnalyticsHubQueryTemplateRoutine getRoutineInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutine">GoogleBigqueryAnalyticsHubQueryTemplateRoutine</a>

---

##### `submitInput`<sup>Optional</sup> <a name="submitInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.submitInput"></a>

```java
public java.lang.Boolean|IResolvable getSubmitInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.timeoutsInput"></a>

```java
public IResolvable|GoogleBigqueryAnalyticsHubQueryTemplateTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeouts">GoogleBigqueryAnalyticsHubQueryTemplateTimeouts</a>

---

##### `dataExchangeId`<sup>Required</sup> <a name="dataExchangeId" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.dataExchangeId"></a>

```java
public java.lang.String getDataExchangeId();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `documentation`<sup>Required</sup> <a name="documentation" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.documentation"></a>

```java
public java.lang.String getDocumentation();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `primaryContact`<sup>Required</sup> <a name="primaryContact" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.primaryContact"></a>

```java
public java.lang.String getPrimaryContact();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `queryTemplateId`<sup>Required</sup> <a name="queryTemplateId" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.queryTemplateId"></a>

```java
public java.lang.String getQueryTemplateId();
```

- *Type:* java.lang.String

---

##### `submit`<sup>Required</sup> <a name="submit" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.submit"></a>

```java
public java.lang.Boolean|IResolvable getSubmit();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBigqueryAnalyticsHubQueryTemplateConfig <a name="GoogleBigqueryAnalyticsHubQueryTemplateConfig" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_bigquery_analytics_hub_query_template.GoogleBigqueryAnalyticsHubQueryTemplateConfig;

GoogleBigqueryAnalyticsHubQueryTemplateConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dataExchangeId(java.lang.String)
    .displayName(java.lang.String)
    .location(java.lang.String)
    .queryTemplateId(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .documentation(java.lang.String)
//  .id(java.lang.String)
//  .primaryContact(java.lang.String)
//  .project(java.lang.String)
//  .routine(GoogleBigqueryAnalyticsHubQueryTemplateRoutine)
//  .submit(java.lang.Boolean|IResolvable)
//  .timeouts(GoogleBigqueryAnalyticsHubQueryTemplateTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.dataExchangeId">dataExchangeId</a></code> | <code>java.lang.String</code> | The ID of the data exchange. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Human-readable display name of the QueryTemplate. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.location">location</a></code> | <code>java.lang.String</code> | The name of the location this data exchange query template. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.queryTemplateId">queryTemplateId</a></code> | <code>java.lang.String</code> | Unique QueryTemplate ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | This field uses a custom implementation please refer to documentation under /hashicorp/terraform-provider-google-beta/website/docs/r/bigquery_analytics_hub_query_template.html.markdown for specifics. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.description">description</a></code> | <code>java.lang.String</code> | Short description of the QueryTemplate. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.documentation">documentation</a></code> | <code>java.lang.String</code> | Documentation describing the QueryTemplate. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_bigquery_analytics_hub_query_template#id GoogleBigqueryAnalyticsHubQueryTemplate#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.primaryContact">primaryContact</a></code> | <code>java.lang.String</code> | Email or URL of the primary point of contact of the QueryTemplate. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_bigquery_analytics_hub_query_template#project GoogleBigqueryAnalyticsHubQueryTemplate#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.routine">routine</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutine">GoogleBigqueryAnalyticsHubQueryTemplateRoutine</a></code> | routine block. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.submit">submit</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set to 'true', the QueryTemplate will be submitted for approval and cannot be updated afterwards. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeouts">GoogleBigqueryAnalyticsHubQueryTemplateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dataExchangeId`<sup>Required</sup> <a name="dataExchangeId" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.dataExchangeId"></a>

```java
public java.lang.String getDataExchangeId();
```

- *Type:* java.lang.String

The ID of the data exchange.

Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_bigquery_analytics_hub_query_template#data_exchange_id GoogleBigqueryAnalyticsHubQueryTemplate#data_exchange_id}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Human-readable display name of the QueryTemplate.

The display name must
contain only Unicode letters, numbers (0-9), underscores (_), dashes (-),
spaces ( ), ampersands (&) and can't start or end with spaces. Default
value is an empty string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_bigquery_analytics_hub_query_template#display_name GoogleBigqueryAnalyticsHubQueryTemplate#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The name of the location this data exchange query template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_bigquery_analytics_hub_query_template#location GoogleBigqueryAnalyticsHubQueryTemplate#location}

---

##### `queryTemplateId`<sup>Required</sup> <a name="queryTemplateId" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.queryTemplateId"></a>

```java
public java.lang.String getQueryTemplateId();
```

- *Type:* java.lang.String

Unique QueryTemplate ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_bigquery_analytics_hub_query_template#query_template_id GoogleBigqueryAnalyticsHubQueryTemplate#query_template_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

This field uses a custom implementation please refer to documentation under /hashicorp/terraform-provider-google-beta/website/docs/r/bigquery_analytics_hub_query_template.html.markdown for specifics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_bigquery_analytics_hub_query_template#deletion_policy GoogleBigqueryAnalyticsHubQueryTemplate#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Short description of the QueryTemplate.

The description must not contain
Unicode non-characters and C0 and C1 control codes except tabs,
new lines, carriage returns, and page breaks.
Default value is an empty string. Max length: 2000 bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_bigquery_analytics_hub_query_template#description GoogleBigqueryAnalyticsHubQueryTemplate#description}

---

##### `documentation`<sup>Optional</sup> <a name="documentation" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.documentation"></a>

```java
public java.lang.String getDocumentation();
```

- *Type:* java.lang.String

Documentation describing the QueryTemplate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_bigquery_analytics_hub_query_template#documentation GoogleBigqueryAnalyticsHubQueryTemplate#documentation}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_bigquery_analytics_hub_query_template#id GoogleBigqueryAnalyticsHubQueryTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `primaryContact`<sup>Optional</sup> <a name="primaryContact" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.primaryContact"></a>

```java
public java.lang.String getPrimaryContact();
```

- *Type:* java.lang.String

Email or URL of the primary point of contact of the QueryTemplate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_bigquery_analytics_hub_query_template#primary_contact GoogleBigqueryAnalyticsHubQueryTemplate#primary_contact}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_bigquery_analytics_hub_query_template#project GoogleBigqueryAnalyticsHubQueryTemplate#project}.

---

##### `routine`<sup>Optional</sup> <a name="routine" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.routine"></a>

```java
public GoogleBigqueryAnalyticsHubQueryTemplateRoutine getRoutine();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutine">GoogleBigqueryAnalyticsHubQueryTemplateRoutine</a>

routine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_bigquery_analytics_hub_query_template#routine GoogleBigqueryAnalyticsHubQueryTemplate#routine}

---

##### `submit`<sup>Optional</sup> <a name="submit" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.submit"></a>

```java
public java.lang.Boolean|IResolvable getSubmit();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set to 'true', the QueryTemplate will be submitted for approval and cannot be updated afterwards.

This is a one-time action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_bigquery_analytics_hub_query_template#submit GoogleBigqueryAnalyticsHubQueryTemplate#submit}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.timeouts"></a>

```java
public GoogleBigqueryAnalyticsHubQueryTemplateTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeouts">GoogleBigqueryAnalyticsHubQueryTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_bigquery_analytics_hub_query_template#timeouts GoogleBigqueryAnalyticsHubQueryTemplate#timeouts}

---

### GoogleBigqueryAnalyticsHubQueryTemplateRoutine <a name="GoogleBigqueryAnalyticsHubQueryTemplateRoutine" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutine"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutine.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_bigquery_analytics_hub_query_template.GoogleBigqueryAnalyticsHubQueryTemplateRoutine;

GoogleBigqueryAnalyticsHubQueryTemplateRoutine.builder()
//  .definitionBody(java.lang.String)
//  .routineType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutine.property.definitionBody">definitionBody</a></code> | <code>java.lang.String</code> | SQL query logic. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutine.property.routineType">routineType</a></code> | <code>java.lang.String</code> | Type of routine (e.g., TABLE_VALUED_FUNCTION). Possible values: ["TABLE_VALUED_FUNCTION"]. |

---

##### `definitionBody`<sup>Optional</sup> <a name="definitionBody" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutine.property.definitionBody"></a>

```java
public java.lang.String getDefinitionBody();
```

- *Type:* java.lang.String

SQL query logic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_bigquery_analytics_hub_query_template#definition_body GoogleBigqueryAnalyticsHubQueryTemplate#definition_body}

---

##### `routineType`<sup>Optional</sup> <a name="routineType" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutine.property.routineType"></a>

```java
public java.lang.String getRoutineType();
```

- *Type:* java.lang.String

Type of routine (e.g., TABLE_VALUED_FUNCTION). Possible values: ["TABLE_VALUED_FUNCTION"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_bigquery_analytics_hub_query_template#routine_type GoogleBigqueryAnalyticsHubQueryTemplate#routine_type}

---

### GoogleBigqueryAnalyticsHubQueryTemplateTimeouts <a name="GoogleBigqueryAnalyticsHubQueryTemplateTimeouts" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_bigquery_analytics_hub_query_template.GoogleBigqueryAnalyticsHubQueryTemplateTimeouts;

GoogleBigqueryAnalyticsHubQueryTemplateTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_bigquery_analytics_hub_query_template#create GoogleBigqueryAnalyticsHubQueryTemplate#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_bigquery_analytics_hub_query_template#delete GoogleBigqueryAnalyticsHubQueryTemplate#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_bigquery_analytics_hub_query_template#update GoogleBigqueryAnalyticsHubQueryTemplate#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_bigquery_analytics_hub_query_template#create GoogleBigqueryAnalyticsHubQueryTemplate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_bigquery_analytics_hub_query_template#delete GoogleBigqueryAnalyticsHubQueryTemplate#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_bigquery_analytics_hub_query_template#update GoogleBigqueryAnalyticsHubQueryTemplate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference <a name="GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_bigquery_analytics_hub_query_template.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference;

new GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.resetDefinitionBody">resetDefinitionBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.resetRoutineType">resetRoutineType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefinitionBody` <a name="resetDefinitionBody" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.resetDefinitionBody"></a>

```java
public void resetDefinitionBody()
```

##### `resetRoutineType` <a name="resetRoutineType" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.resetRoutineType"></a>

```java
public void resetRoutineType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.definitionBodyInput">definitionBodyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.routineTypeInput">routineTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.definitionBody">definitionBody</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.routineType">routineType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutine">GoogleBigqueryAnalyticsHubQueryTemplateRoutine</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `definitionBodyInput`<sup>Optional</sup> <a name="definitionBodyInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.definitionBodyInput"></a>

```java
public java.lang.String getDefinitionBodyInput();
```

- *Type:* java.lang.String

---

##### `routineTypeInput`<sup>Optional</sup> <a name="routineTypeInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.routineTypeInput"></a>

```java
public java.lang.String getRoutineTypeInput();
```

- *Type:* java.lang.String

---

##### `definitionBody`<sup>Required</sup> <a name="definitionBody" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.definitionBody"></a>

```java
public java.lang.String getDefinitionBody();
```

- *Type:* java.lang.String

---

##### `routineType`<sup>Required</sup> <a name="routineType" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.routineType"></a>

```java
public java.lang.String getRoutineType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.internalValue"></a>

```java
public GoogleBigqueryAnalyticsHubQueryTemplateRoutine getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutine">GoogleBigqueryAnalyticsHubQueryTemplateRoutine</a>

---


### GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference <a name="GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_bigquery_analytics_hub_query_template.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference;

new GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeouts">GoogleBigqueryAnalyticsHubQueryTemplateTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleBigqueryAnalyticsHubQueryTemplateTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeouts">GoogleBigqueryAnalyticsHubQueryTemplateTimeouts</a>

---



