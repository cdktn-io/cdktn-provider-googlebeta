# `googleDiscoveryEngineLicenseConfig` Submodule <a name="`googleDiscoveryEngineLicenseConfig` Submodule" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDiscoveryEngineLicenseConfig <a name="GoogleDiscoveryEngineLicenseConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_license_config google_discovery_engine_license_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_license_config.GoogleDiscoveryEngineLicenseConfig;

GoogleDiscoveryEngineLicenseConfig.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .licenseConfigId(java.lang.String)
    .licenseCount(java.lang.Number)
    .location(java.lang.String)
    .startDate(GoogleDiscoveryEngineLicenseConfigStartDate)
    .subscriptionTerm(java.lang.String)
    .subscriptionTier(java.lang.String)
//  .autoRenew(java.lang.Boolean|IResolvable)
//  .endDate(GoogleDiscoveryEngineLicenseConfigEndDate)
//  .freeTrial(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleDiscoveryEngineLicenseConfigTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.licenseConfigId">licenseConfigId</a></code> | <code>java.lang.String</code> | The unique id of the license config. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.licenseCount">licenseCount</a></code> | <code>java.lang.Number</code> | Number of licenses purchased. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.startDate">startDate</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDate">GoogleDiscoveryEngineLicenseConfigStartDate</a></code> | start_date block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.subscriptionTerm">subscriptionTerm</a></code> | <code>java.lang.String</code> | Subscription term. Possible values: ["SUBSCRIPTION_TERM_UNSPECIFIED", "SUBSCRIPTION_TERM_ONE_MONTH", "SUBSCRIPTION_TERM_ONE_YEAR", "SUBSCRIPTION_TERM_THREE_YEARS", "SUBSCRIPTION_TERM_THREE_MONTHS", "SUBSCRIPTION_TERM_FOURTEEN_DAYS", "SUBSCRIPTION_TERM_CUSTOM"]. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.subscriptionTier">subscriptionTier</a></code> | <code>java.lang.String</code> | Subscription tier information for the license config. Possible values: ["SUBSCRIPTION_TIER_UNSPECIFIED", "SUBSCRIPTION_TIER_SEARCH", "SUBSCRIPTION_TIER_SEARCH_AND_ASSISTANT", "SUBSCRIPTION_TIER_NOTEBOOK_LM", "SUBSCRIPTION_TIER_FRONTLINE_WORKER", "SUBSCRIPTION_TIER_AGENTSPACE_STARTER", "SUBSCRIPTION_TIER_AGENTSPACE_BUSINESS", "SUBSCRIPTION_TIER_ENTERPRISE", "SUBSCRIPTION_TIER_EDU", "SUBSCRIPTION_TIER_EDU_PRO"]. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.autoRenew">autoRenew</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the license config should be auto renewed when it reaches the end date. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.endDate">endDate</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDate">GoogleDiscoveryEngineLicenseConfigEndDate</a></code> | end_date block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.freeTrial">freeTrial</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the license config is for free trial. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_license_config#id GoogleDiscoveryEngineLicenseConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_license_config#project GoogleDiscoveryEngineLicenseConfig#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeouts">GoogleDiscoveryEngineLicenseConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `licenseConfigId`<sup>Required</sup> <a name="licenseConfigId" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.licenseConfigId"></a>

- *Type:* java.lang.String

The unique id of the license config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_license_config#license_config_id GoogleDiscoveryEngineLicenseConfig#license_config_id}

---

##### `licenseCount`<sup>Required</sup> <a name="licenseCount" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.licenseCount"></a>

- *Type:* java.lang.Number

Number of licenses purchased.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_license_config#license_count GoogleDiscoveryEngineLicenseConfig#license_count}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_license_config#location GoogleDiscoveryEngineLicenseConfig#location}

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.startDate"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDate">GoogleDiscoveryEngineLicenseConfigStartDate</a>

start_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_license_config#start_date GoogleDiscoveryEngineLicenseConfig#start_date}

---

##### `subscriptionTerm`<sup>Required</sup> <a name="subscriptionTerm" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.subscriptionTerm"></a>

- *Type:* java.lang.String

Subscription term. Possible values: ["SUBSCRIPTION_TERM_UNSPECIFIED", "SUBSCRIPTION_TERM_ONE_MONTH", "SUBSCRIPTION_TERM_ONE_YEAR", "SUBSCRIPTION_TERM_THREE_YEARS", "SUBSCRIPTION_TERM_THREE_MONTHS", "SUBSCRIPTION_TERM_FOURTEEN_DAYS", "SUBSCRIPTION_TERM_CUSTOM"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_license_config#subscription_term GoogleDiscoveryEngineLicenseConfig#subscription_term}

---

##### `subscriptionTier`<sup>Required</sup> <a name="subscriptionTier" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.subscriptionTier"></a>

- *Type:* java.lang.String

Subscription tier information for the license config. Possible values: ["SUBSCRIPTION_TIER_UNSPECIFIED", "SUBSCRIPTION_TIER_SEARCH", "SUBSCRIPTION_TIER_SEARCH_AND_ASSISTANT", "SUBSCRIPTION_TIER_NOTEBOOK_LM", "SUBSCRIPTION_TIER_FRONTLINE_WORKER", "SUBSCRIPTION_TIER_AGENTSPACE_STARTER", "SUBSCRIPTION_TIER_AGENTSPACE_BUSINESS", "SUBSCRIPTION_TIER_ENTERPRISE", "SUBSCRIPTION_TIER_EDU", "SUBSCRIPTION_TIER_EDU_PRO"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_license_config#subscription_tier GoogleDiscoveryEngineLicenseConfig#subscription_tier}

---

##### `autoRenew`<sup>Optional</sup> <a name="autoRenew" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.autoRenew"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the license config should be auto renewed when it reaches the end date.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_license_config#auto_renew GoogleDiscoveryEngineLicenseConfig#auto_renew}

---

##### `endDate`<sup>Optional</sup> <a name="endDate" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.endDate"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDate">GoogleDiscoveryEngineLicenseConfigEndDate</a>

end_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_license_config#end_date GoogleDiscoveryEngineLicenseConfig#end_date}

---

##### `freeTrial`<sup>Optional</sup> <a name="freeTrial" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.freeTrial"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the license config is for free trial.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_license_config#free_trial GoogleDiscoveryEngineLicenseConfig#free_trial}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_license_config#id GoogleDiscoveryEngineLicenseConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_license_config#project GoogleDiscoveryEngineLicenseConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeouts">GoogleDiscoveryEngineLicenseConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_license_config#timeouts GoogleDiscoveryEngineLicenseConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.putEndDate">putEndDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.putStartDate">putStartDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.resetAutoRenew">resetAutoRenew</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.resetEndDate">resetEndDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.resetFreeTrial">resetFreeTrial</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEndDate` <a name="putEndDate" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.putEndDate"></a>

```java
public void putEndDate(GoogleDiscoveryEngineLicenseConfigEndDate value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.putEndDate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDate">GoogleDiscoveryEngineLicenseConfigEndDate</a>

---

##### `putStartDate` <a name="putStartDate" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.putStartDate"></a>

```java
public void putStartDate(GoogleDiscoveryEngineLicenseConfigStartDate value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.putStartDate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDate">GoogleDiscoveryEngineLicenseConfigStartDate</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.putTimeouts"></a>

```java
public void putTimeouts(GoogleDiscoveryEngineLicenseConfigTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeouts">GoogleDiscoveryEngineLicenseConfigTimeouts</a>

---

##### `resetAutoRenew` <a name="resetAutoRenew" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.resetAutoRenew"></a>

```java
public void resetAutoRenew()
```

##### `resetEndDate` <a name="resetEndDate" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.resetEndDate"></a>

```java
public void resetEndDate()
```

##### `resetFreeTrial` <a name="resetFreeTrial" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.resetFreeTrial"></a>

```java
public void resetFreeTrial()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDiscoveryEngineLicenseConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_license_config.GoogleDiscoveryEngineLicenseConfig;

GoogleDiscoveryEngineLicenseConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_license_config.GoogleDiscoveryEngineLicenseConfig;

GoogleDiscoveryEngineLicenseConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_license_config.GoogleDiscoveryEngineLicenseConfig;

GoogleDiscoveryEngineLicenseConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_license_config.GoogleDiscoveryEngineLicenseConfig;

GoogleDiscoveryEngineLicenseConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleDiscoveryEngineLicenseConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleDiscoveryEngineLicenseConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleDiscoveryEngineLicenseConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleDiscoveryEngineLicenseConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_license_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDiscoveryEngineLicenseConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.endDate">endDate</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference">GoogleDiscoveryEngineLicenseConfigEndDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.startDate">startDate</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference">GoogleDiscoveryEngineLicenseConfigStartDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference">GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.autoRenewInput">autoRenewInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.endDateInput">endDateInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDate">GoogleDiscoveryEngineLicenseConfigEndDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.freeTrialInput">freeTrialInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.licenseConfigIdInput">licenseConfigIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.licenseCountInput">licenseCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.startDateInput">startDateInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDate">GoogleDiscoveryEngineLicenseConfigStartDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.subscriptionTermInput">subscriptionTermInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.subscriptionTierInput">subscriptionTierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeouts">GoogleDiscoveryEngineLicenseConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.autoRenew">autoRenew</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.freeTrial">freeTrial</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.licenseConfigId">licenseConfigId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.licenseCount">licenseCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.subscriptionTerm">subscriptionTerm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.subscriptionTier">subscriptionTier</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `endDate`<sup>Required</sup> <a name="endDate" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.endDate"></a>

```java
public GoogleDiscoveryEngineLicenseConfigEndDateOutputReference getEndDate();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference">GoogleDiscoveryEngineLicenseConfigEndDateOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.startDate"></a>

```java
public GoogleDiscoveryEngineLicenseConfigStartDateOutputReference getStartDate();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference">GoogleDiscoveryEngineLicenseConfigStartDateOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.timeouts"></a>

```java
public GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference">GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference</a>

---

##### `autoRenewInput`<sup>Optional</sup> <a name="autoRenewInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.autoRenewInput"></a>

```java
public java.lang.Boolean|IResolvable getAutoRenewInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `endDateInput`<sup>Optional</sup> <a name="endDateInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.endDateInput"></a>

```java
public GoogleDiscoveryEngineLicenseConfigEndDate getEndDateInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDate">GoogleDiscoveryEngineLicenseConfigEndDate</a>

---

##### `freeTrialInput`<sup>Optional</sup> <a name="freeTrialInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.freeTrialInput"></a>

```java
public java.lang.Boolean|IResolvable getFreeTrialInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `licenseConfigIdInput`<sup>Optional</sup> <a name="licenseConfigIdInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.licenseConfigIdInput"></a>

```java
public java.lang.String getLicenseConfigIdInput();
```

- *Type:* java.lang.String

---

##### `licenseCountInput`<sup>Optional</sup> <a name="licenseCountInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.licenseCountInput"></a>

```java
public java.lang.Number getLicenseCountInput();
```

- *Type:* java.lang.Number

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `startDateInput`<sup>Optional</sup> <a name="startDateInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.startDateInput"></a>

```java
public GoogleDiscoveryEngineLicenseConfigStartDate getStartDateInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDate">GoogleDiscoveryEngineLicenseConfigStartDate</a>

---

##### `subscriptionTermInput`<sup>Optional</sup> <a name="subscriptionTermInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.subscriptionTermInput"></a>

```java
public java.lang.String getSubscriptionTermInput();
```

- *Type:* java.lang.String

---

##### `subscriptionTierInput`<sup>Optional</sup> <a name="subscriptionTierInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.subscriptionTierInput"></a>

```java
public java.lang.String getSubscriptionTierInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.timeoutsInput"></a>

```java
public IResolvable|GoogleDiscoveryEngineLicenseConfigTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeouts">GoogleDiscoveryEngineLicenseConfigTimeouts</a>

---

##### `autoRenew`<sup>Required</sup> <a name="autoRenew" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.autoRenew"></a>

```java
public java.lang.Boolean|IResolvable getAutoRenew();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `freeTrial`<sup>Required</sup> <a name="freeTrial" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.freeTrial"></a>

```java
public java.lang.Boolean|IResolvable getFreeTrial();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `licenseConfigId`<sup>Required</sup> <a name="licenseConfigId" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.licenseConfigId"></a>

```java
public java.lang.String getLicenseConfigId();
```

- *Type:* java.lang.String

---

##### `licenseCount`<sup>Required</sup> <a name="licenseCount" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.licenseCount"></a>

```java
public java.lang.Number getLicenseCount();
```

- *Type:* java.lang.Number

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `subscriptionTerm`<sup>Required</sup> <a name="subscriptionTerm" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.subscriptionTerm"></a>

```java
public java.lang.String getSubscriptionTerm();
```

- *Type:* java.lang.String

---

##### `subscriptionTier`<sup>Required</sup> <a name="subscriptionTier" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.subscriptionTier"></a>

```java
public java.lang.String getSubscriptionTier();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDiscoveryEngineLicenseConfigConfig <a name="GoogleDiscoveryEngineLicenseConfigConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_license_config.GoogleDiscoveryEngineLicenseConfigConfig;

GoogleDiscoveryEngineLicenseConfigConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .licenseConfigId(java.lang.String)
    .licenseCount(java.lang.Number)
    .location(java.lang.String)
    .startDate(GoogleDiscoveryEngineLicenseConfigStartDate)
    .subscriptionTerm(java.lang.String)
    .subscriptionTier(java.lang.String)
//  .autoRenew(java.lang.Boolean|IResolvable)
//  .endDate(GoogleDiscoveryEngineLicenseConfigEndDate)
//  .freeTrial(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleDiscoveryEngineLicenseConfigTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.licenseConfigId">licenseConfigId</a></code> | <code>java.lang.String</code> | The unique id of the license config. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.licenseCount">licenseCount</a></code> | <code>java.lang.Number</code> | Number of licenses purchased. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.location">location</a></code> | <code>java.lang.String</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.startDate">startDate</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDate">GoogleDiscoveryEngineLicenseConfigStartDate</a></code> | start_date block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.subscriptionTerm">subscriptionTerm</a></code> | <code>java.lang.String</code> | Subscription term. Possible values: ["SUBSCRIPTION_TERM_UNSPECIFIED", "SUBSCRIPTION_TERM_ONE_MONTH", "SUBSCRIPTION_TERM_ONE_YEAR", "SUBSCRIPTION_TERM_THREE_YEARS", "SUBSCRIPTION_TERM_THREE_MONTHS", "SUBSCRIPTION_TERM_FOURTEEN_DAYS", "SUBSCRIPTION_TERM_CUSTOM"]. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.subscriptionTier">subscriptionTier</a></code> | <code>java.lang.String</code> | Subscription tier information for the license config. Possible values: ["SUBSCRIPTION_TIER_UNSPECIFIED", "SUBSCRIPTION_TIER_SEARCH", "SUBSCRIPTION_TIER_SEARCH_AND_ASSISTANT", "SUBSCRIPTION_TIER_NOTEBOOK_LM", "SUBSCRIPTION_TIER_FRONTLINE_WORKER", "SUBSCRIPTION_TIER_AGENTSPACE_STARTER", "SUBSCRIPTION_TIER_AGENTSPACE_BUSINESS", "SUBSCRIPTION_TIER_ENTERPRISE", "SUBSCRIPTION_TIER_EDU", "SUBSCRIPTION_TIER_EDU_PRO"]. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.autoRenew">autoRenew</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the license config should be auto renewed when it reaches the end date. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.endDate">endDate</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDate">GoogleDiscoveryEngineLicenseConfigEndDate</a></code> | end_date block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.freeTrial">freeTrial</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the license config is for free trial. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_license_config#id GoogleDiscoveryEngineLicenseConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_license_config#project GoogleDiscoveryEngineLicenseConfig#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeouts">GoogleDiscoveryEngineLicenseConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `licenseConfigId`<sup>Required</sup> <a name="licenseConfigId" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.licenseConfigId"></a>

```java
public java.lang.String getLicenseConfigId();
```

- *Type:* java.lang.String

The unique id of the license config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_license_config#license_config_id GoogleDiscoveryEngineLicenseConfig#license_config_id}

---

##### `licenseCount`<sup>Required</sup> <a name="licenseCount" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.licenseCount"></a>

```java
public java.lang.Number getLicenseCount();
```

- *Type:* java.lang.Number

Number of licenses purchased.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_license_config#license_count GoogleDiscoveryEngineLicenseConfig#license_count}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_license_config#location GoogleDiscoveryEngineLicenseConfig#location}

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.startDate"></a>

```java
public GoogleDiscoveryEngineLicenseConfigStartDate getStartDate();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDate">GoogleDiscoveryEngineLicenseConfigStartDate</a>

start_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_license_config#start_date GoogleDiscoveryEngineLicenseConfig#start_date}

---

##### `subscriptionTerm`<sup>Required</sup> <a name="subscriptionTerm" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.subscriptionTerm"></a>

```java
public java.lang.String getSubscriptionTerm();
```

- *Type:* java.lang.String

Subscription term. Possible values: ["SUBSCRIPTION_TERM_UNSPECIFIED", "SUBSCRIPTION_TERM_ONE_MONTH", "SUBSCRIPTION_TERM_ONE_YEAR", "SUBSCRIPTION_TERM_THREE_YEARS", "SUBSCRIPTION_TERM_THREE_MONTHS", "SUBSCRIPTION_TERM_FOURTEEN_DAYS", "SUBSCRIPTION_TERM_CUSTOM"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_license_config#subscription_term GoogleDiscoveryEngineLicenseConfig#subscription_term}

---

##### `subscriptionTier`<sup>Required</sup> <a name="subscriptionTier" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.subscriptionTier"></a>

```java
public java.lang.String getSubscriptionTier();
```

- *Type:* java.lang.String

Subscription tier information for the license config. Possible values: ["SUBSCRIPTION_TIER_UNSPECIFIED", "SUBSCRIPTION_TIER_SEARCH", "SUBSCRIPTION_TIER_SEARCH_AND_ASSISTANT", "SUBSCRIPTION_TIER_NOTEBOOK_LM", "SUBSCRIPTION_TIER_FRONTLINE_WORKER", "SUBSCRIPTION_TIER_AGENTSPACE_STARTER", "SUBSCRIPTION_TIER_AGENTSPACE_BUSINESS", "SUBSCRIPTION_TIER_ENTERPRISE", "SUBSCRIPTION_TIER_EDU", "SUBSCRIPTION_TIER_EDU_PRO"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_license_config#subscription_tier GoogleDiscoveryEngineLicenseConfig#subscription_tier}

---

##### `autoRenew`<sup>Optional</sup> <a name="autoRenew" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.autoRenew"></a>

```java
public java.lang.Boolean|IResolvable getAutoRenew();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the license config should be auto renewed when it reaches the end date.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_license_config#auto_renew GoogleDiscoveryEngineLicenseConfig#auto_renew}

---

##### `endDate`<sup>Optional</sup> <a name="endDate" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.endDate"></a>

```java
public GoogleDiscoveryEngineLicenseConfigEndDate getEndDate();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDate">GoogleDiscoveryEngineLicenseConfigEndDate</a>

end_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_license_config#end_date GoogleDiscoveryEngineLicenseConfig#end_date}

---

##### `freeTrial`<sup>Optional</sup> <a name="freeTrial" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.freeTrial"></a>

```java
public java.lang.Boolean|IResolvable getFreeTrial();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the license config is for free trial.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_license_config#free_trial GoogleDiscoveryEngineLicenseConfig#free_trial}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_license_config#id GoogleDiscoveryEngineLicenseConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_license_config#project GoogleDiscoveryEngineLicenseConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.timeouts"></a>

```java
public GoogleDiscoveryEngineLicenseConfigTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeouts">GoogleDiscoveryEngineLicenseConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_license_config#timeouts GoogleDiscoveryEngineLicenseConfig#timeouts}

---

### GoogleDiscoveryEngineLicenseConfigEndDate <a name="GoogleDiscoveryEngineLicenseConfigEndDate" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDate.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_license_config.GoogleDiscoveryEngineLicenseConfigEndDate;

GoogleDiscoveryEngineLicenseConfigEndDate.builder()
//  .day(java.lang.Number)
//  .month(java.lang.Number)
//  .year(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDate.property.day">day</a></code> | <code>java.lang.Number</code> | Day of a month. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDate.property.month">month</a></code> | <code>java.lang.Number</code> | Month of a year. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDate.property.year">year</a></code> | <code>java.lang.Number</code> | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. |

---

##### `day`<sup>Optional</sup> <a name="day" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDate.property.day"></a>

```java
public java.lang.Number getDay();
```

- *Type:* java.lang.Number

Day of a month.

Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_license_config#day GoogleDiscoveryEngineLicenseConfig#day}

---

##### `month`<sup>Optional</sup> <a name="month" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDate.property.month"></a>

```java
public java.lang.Number getMonth();
```

- *Type:* java.lang.Number

Month of a year.

Must be from 1 to 12, or 0 to specify a year without a month and day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_license_config#month GoogleDiscoveryEngineLicenseConfig#month}

---

##### `year`<sup>Optional</sup> <a name="year" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDate.property.year"></a>

```java
public java.lang.Number getYear();
```

- *Type:* java.lang.Number

Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_license_config#year GoogleDiscoveryEngineLicenseConfig#year}

---

### GoogleDiscoveryEngineLicenseConfigStartDate <a name="GoogleDiscoveryEngineLicenseConfigStartDate" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDate.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_license_config.GoogleDiscoveryEngineLicenseConfigStartDate;

GoogleDiscoveryEngineLicenseConfigStartDate.builder()
//  .day(java.lang.Number)
//  .month(java.lang.Number)
//  .year(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDate.property.day">day</a></code> | <code>java.lang.Number</code> | Day of a month. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDate.property.month">month</a></code> | <code>java.lang.Number</code> | Month of a year. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDate.property.year">year</a></code> | <code>java.lang.Number</code> | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. |

---

##### `day`<sup>Optional</sup> <a name="day" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDate.property.day"></a>

```java
public java.lang.Number getDay();
```

- *Type:* java.lang.Number

Day of a month.

Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_license_config#day GoogleDiscoveryEngineLicenseConfig#day}

---

##### `month`<sup>Optional</sup> <a name="month" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDate.property.month"></a>

```java
public java.lang.Number getMonth();
```

- *Type:* java.lang.Number

Month of a year.

Must be from 1 to 12, or 0 to specify a year without a month and day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_license_config#month GoogleDiscoveryEngineLicenseConfig#month}

---

##### `year`<sup>Optional</sup> <a name="year" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDate.property.year"></a>

```java
public java.lang.Number getYear();
```

- *Type:* java.lang.Number

Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_license_config#year GoogleDiscoveryEngineLicenseConfig#year}

---

### GoogleDiscoveryEngineLicenseConfigTimeouts <a name="GoogleDiscoveryEngineLicenseConfigTimeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_license_config.GoogleDiscoveryEngineLicenseConfigTimeouts;

GoogleDiscoveryEngineLicenseConfigTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_license_config#create GoogleDiscoveryEngineLicenseConfig#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_license_config#delete GoogleDiscoveryEngineLicenseConfig#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_license_config#update GoogleDiscoveryEngineLicenseConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_license_config#create GoogleDiscoveryEngineLicenseConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_license_config#delete GoogleDiscoveryEngineLicenseConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_discovery_engine_license_config#update GoogleDiscoveryEngineLicenseConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDiscoveryEngineLicenseConfigEndDateOutputReference <a name="GoogleDiscoveryEngineLicenseConfigEndDateOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_license_config.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference;

new GoogleDiscoveryEngineLicenseConfigEndDateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.resetDay">resetDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.resetMonth">resetMonth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.resetYear">resetYear</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDay` <a name="resetDay" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.resetDay"></a>

```java
public void resetDay()
```

##### `resetMonth` <a name="resetMonth" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.resetMonth"></a>

```java
public void resetMonth()
```

##### `resetYear` <a name="resetYear" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.resetYear"></a>

```java
public void resetYear()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.property.dayInput">dayInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.property.monthInput">monthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.property.yearInput">yearInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.property.day">day</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.property.month">month</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.property.year">year</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDate">GoogleDiscoveryEngineLicenseConfigEndDate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dayInput`<sup>Optional</sup> <a name="dayInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.property.dayInput"></a>

```java
public java.lang.Number getDayInput();
```

- *Type:* java.lang.Number

---

##### `monthInput`<sup>Optional</sup> <a name="monthInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.property.monthInput"></a>

```java
public java.lang.Number getMonthInput();
```

- *Type:* java.lang.Number

---

##### `yearInput`<sup>Optional</sup> <a name="yearInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.property.yearInput"></a>

```java
public java.lang.Number getYearInput();
```

- *Type:* java.lang.Number

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.property.day"></a>

```java
public java.lang.Number getDay();
```

- *Type:* java.lang.Number

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.property.month"></a>

```java
public java.lang.Number getMonth();
```

- *Type:* java.lang.Number

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.property.year"></a>

```java
public java.lang.Number getYear();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.property.internalValue"></a>

```java
public GoogleDiscoveryEngineLicenseConfigEndDate getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDate">GoogleDiscoveryEngineLicenseConfigEndDate</a>

---


### GoogleDiscoveryEngineLicenseConfigStartDateOutputReference <a name="GoogleDiscoveryEngineLicenseConfigStartDateOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_license_config.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference;

new GoogleDiscoveryEngineLicenseConfigStartDateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.resetDay">resetDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.resetMonth">resetMonth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.resetYear">resetYear</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDay` <a name="resetDay" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.resetDay"></a>

```java
public void resetDay()
```

##### `resetMonth` <a name="resetMonth" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.resetMonth"></a>

```java
public void resetMonth()
```

##### `resetYear` <a name="resetYear" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.resetYear"></a>

```java
public void resetYear()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.property.dayInput">dayInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.property.monthInput">monthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.property.yearInput">yearInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.property.day">day</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.property.month">month</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.property.year">year</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDate">GoogleDiscoveryEngineLicenseConfigStartDate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dayInput`<sup>Optional</sup> <a name="dayInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.property.dayInput"></a>

```java
public java.lang.Number getDayInput();
```

- *Type:* java.lang.Number

---

##### `monthInput`<sup>Optional</sup> <a name="monthInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.property.monthInput"></a>

```java
public java.lang.Number getMonthInput();
```

- *Type:* java.lang.Number

---

##### `yearInput`<sup>Optional</sup> <a name="yearInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.property.yearInput"></a>

```java
public java.lang.Number getYearInput();
```

- *Type:* java.lang.Number

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.property.day"></a>

```java
public java.lang.Number getDay();
```

- *Type:* java.lang.Number

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.property.month"></a>

```java
public java.lang.Number getMonth();
```

- *Type:* java.lang.Number

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.property.year"></a>

```java
public java.lang.Number getYear();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.property.internalValue"></a>

```java
public GoogleDiscoveryEngineLicenseConfigStartDate getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDate">GoogleDiscoveryEngineLicenseConfigStartDate</a>

---


### GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference <a name="GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_license_config.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference;

new GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeouts">GoogleDiscoveryEngineLicenseConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleDiscoveryEngineLicenseConfigTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeouts">GoogleDiscoveryEngineLicenseConfigTimeouts</a>

---



