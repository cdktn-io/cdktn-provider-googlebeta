# `googleComputeOrganizationSecurityPolicyRule` Submodule <a name="`googleComputeOrganizationSecurityPolicyRule` Submodule" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeOrganizationSecurityPolicyRule <a name="GoogleComputeOrganizationSecurityPolicyRule" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_organization_security_policy_rule google_compute_organization_security_policy_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_organization_security_policy_rule.GoogleComputeOrganizationSecurityPolicyRule;

GoogleComputeOrganizationSecurityPolicyRule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .action(java.lang.String)
    .match(GoogleComputeOrganizationSecurityPolicyRuleMatch)
    .policyId(java.lang.String)
    .priority(java.lang.Number)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .direction(java.lang.String)
//  .enableLogging(java.lang.Boolean|IResolvable)
//  .headerAction(GoogleComputeOrganizationSecurityPolicyRuleHeaderAction)
//  .id(java.lang.String)
//  .preconfiguredWafConfig(GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig)
//  .preview(java.lang.Boolean|IResolvable)
//  .redirectOptions(GoogleComputeOrganizationSecurityPolicyRuleRedirectOptions)
//  .targetResources(java.util.List<java.lang.String>)
//  .targetServiceAccounts(java.util.List<java.lang.String>)
//  .timeouts(GoogleComputeOrganizationSecurityPolicyRuleTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.Initializer.parameter.action">action</a></code> | <code>java.lang.String</code> | The Action to perform when the client connection triggers the rule. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.Initializer.parameter.match">match</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatch">GoogleComputeOrganizationSecurityPolicyRuleMatch</a></code> | match block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.Initializer.parameter.policyId">policyId</a></code> | <code>java.lang.String</code> | The ID of the OrganizationSecurityPolicy this rule applies to. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.Initializer.parameter.priority">priority</a></code> | <code>java.lang.Number</code> | An integer indicating the priority of a rule in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description of the rule. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.Initializer.parameter.direction">direction</a></code> | <code>java.lang.String</code> | The direction in which this rule applies. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.Initializer.parameter.enableLogging">enableLogging</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Denotes whether to enable logging for a particular rule. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.Initializer.parameter.headerAction">headerAction</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderAction">GoogleComputeOrganizationSecurityPolicyRuleHeaderAction</a></code> | header_action block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_organization_security_policy_rule#id GoogleComputeOrganizationSecurityPolicyRule#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.Initializer.parameter.preconfiguredWafConfig">preconfiguredWafConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig">GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig</a></code> | preconfigured_waf_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.Initializer.parameter.preview">preview</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set to true, the specified action is not enforced. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.Initializer.parameter.redirectOptions">redirectOptions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptions">GoogleComputeOrganizationSecurityPolicyRuleRedirectOptions</a></code> | redirect_options block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.Initializer.parameter.targetResources">targetResources</a></code> | <code>java.util.List<java.lang.String></code> | A list of network resource URLs to which this rule applies. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.Initializer.parameter.targetServiceAccounts">targetServiceAccounts</a></code> | <code>java.util.List<java.lang.String></code> | A list of service accounts indicating the sets of instances that are applied with this rule. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeouts">GoogleComputeOrganizationSecurityPolicyRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.Initializer.parameter.action"></a>

- *Type:* java.lang.String

The Action to perform when the client connection triggers the rule.

Valid actions are:
"allow": allow access to target.
"deny": deny access to target.
"goto_next": forward the request to the next hierarchical policy for evaluation.
"redirect": redirect to a different target. Parameters for this action can be configured via redirectOptions. Only EXTERNAL_302 redirect type is supported for organization security policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_organization_security_policy_rule#action GoogleComputeOrganizationSecurityPolicyRule#action}

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.Initializer.parameter.match"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatch">GoogleComputeOrganizationSecurityPolicyRuleMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_organization_security_policy_rule#match GoogleComputeOrganizationSecurityPolicyRule#match}

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.Initializer.parameter.policyId"></a>

- *Type:* java.lang.String

The ID of the OrganizationSecurityPolicy this rule applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_organization_security_policy_rule#policy_id GoogleComputeOrganizationSecurityPolicyRule#policy_id}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.Initializer.parameter.priority"></a>

- *Type:* java.lang.Number

An integer indicating the priority of a rule in the list.

The priority must be a value
between 0 and 2147483647. Rules are evaluated from highest to lowest priority where 0 is the
highest priority and 2147483647 is the lowest prority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_organization_security_policy_rule#priority GoogleComputeOrganizationSecurityPolicyRule#priority}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_organization_security_policy_rule#deletion_policy GoogleComputeOrganizationSecurityPolicyRule#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_organization_security_policy_rule#description GoogleComputeOrganizationSecurityPolicyRule#description}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.Initializer.parameter.direction"></a>

- *Type:* java.lang.String

The direction in which this rule applies.

If unspecified an INGRESS rule is created.
This field may only be specified when the versionedExpr is set to FIREWALL. Possible values: ["INGRESS", "EGRESS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_organization_security_policy_rule#direction GoogleComputeOrganizationSecurityPolicyRule#direction}

---

##### `enableLogging`<sup>Optional</sup> <a name="enableLogging" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.Initializer.parameter.enableLogging"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Denotes whether to enable logging for a particular rule.

If logging is enabled, logs will be exported to the
configured export destination in Stackdriver.
This field may only be specified when the versionedExpr is set to FIREWALL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_organization_security_policy_rule#enable_logging GoogleComputeOrganizationSecurityPolicyRule#enable_logging}

---

##### `headerAction`<sup>Optional</sup> <a name="headerAction" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.Initializer.parameter.headerAction"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderAction">GoogleComputeOrganizationSecurityPolicyRuleHeaderAction</a>

header_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_organization_security_policy_rule#header_action GoogleComputeOrganizationSecurityPolicyRule#header_action}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_organization_security_policy_rule#id GoogleComputeOrganizationSecurityPolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `preconfiguredWafConfig`<sup>Optional</sup> <a name="preconfiguredWafConfig" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.Initializer.parameter.preconfiguredWafConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig">GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig</a>

preconfigured_waf_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_organization_security_policy_rule#preconfigured_waf_config GoogleComputeOrganizationSecurityPolicyRule#preconfigured_waf_config}

---

##### `preview`<sup>Optional</sup> <a name="preview" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.Initializer.parameter.preview"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set to true, the specified action is not enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_organization_security_policy_rule#preview GoogleComputeOrganizationSecurityPolicyRule#preview}

---

##### `redirectOptions`<sup>Optional</sup> <a name="redirectOptions" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.Initializer.parameter.redirectOptions"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptions">GoogleComputeOrganizationSecurityPolicyRuleRedirectOptions</a>

redirect_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_organization_security_policy_rule#redirect_options GoogleComputeOrganizationSecurityPolicyRule#redirect_options}

---

##### `targetResources`<sup>Optional</sup> <a name="targetResources" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.Initializer.parameter.targetResources"></a>

- *Type:* java.util.List<java.lang.String>

A list of network resource URLs to which this rule applies.

This field allows you to control which network's VMs get
this rule. If this field is left blank, all VMs
within the organization will receive the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_organization_security_policy_rule#target_resources GoogleComputeOrganizationSecurityPolicyRule#target_resources}

---

##### `targetServiceAccounts`<sup>Optional</sup> <a name="targetServiceAccounts" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.Initializer.parameter.targetServiceAccounts"></a>

- *Type:* java.util.List<java.lang.String>

A list of service accounts indicating the sets of instances that are applied with this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_organization_security_policy_rule#target_service_accounts GoogleComputeOrganizationSecurityPolicyRule#target_service_accounts}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeouts">GoogleComputeOrganizationSecurityPolicyRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_organization_security_policy_rule#timeouts GoogleComputeOrganizationSecurityPolicyRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.putHeaderAction">putHeaderAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.putMatch">putMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.putPreconfiguredWafConfig">putPreconfiguredWafConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.putRedirectOptions">putRedirectOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.resetDirection">resetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.resetEnableLogging">resetEnableLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.resetHeaderAction">resetHeaderAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.resetPreconfiguredWafConfig">resetPreconfiguredWafConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.resetPreview">resetPreview</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.resetRedirectOptions">resetRedirectOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.resetTargetResources">resetTargetResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.resetTargetServiceAccounts">resetTargetServiceAccounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putHeaderAction` <a name="putHeaderAction" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.putHeaderAction"></a>

```java
public void putHeaderAction(GoogleComputeOrganizationSecurityPolicyRuleHeaderAction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.putHeaderAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderAction">GoogleComputeOrganizationSecurityPolicyRuleHeaderAction</a>

---

##### `putMatch` <a name="putMatch" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.putMatch"></a>

```java
public void putMatch(GoogleComputeOrganizationSecurityPolicyRuleMatch value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatch">GoogleComputeOrganizationSecurityPolicyRuleMatch</a>

---

##### `putPreconfiguredWafConfig` <a name="putPreconfiguredWafConfig" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.putPreconfiguredWafConfig"></a>

```java
public void putPreconfiguredWafConfig(GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.putPreconfiguredWafConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig">GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig</a>

---

##### `putRedirectOptions` <a name="putRedirectOptions" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.putRedirectOptions"></a>

```java
public void putRedirectOptions(GoogleComputeOrganizationSecurityPolicyRuleRedirectOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.putRedirectOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptions">GoogleComputeOrganizationSecurityPolicyRuleRedirectOptions</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.putTimeouts"></a>

```java
public void putTimeouts(GoogleComputeOrganizationSecurityPolicyRuleTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeouts">GoogleComputeOrganizationSecurityPolicyRuleTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDirection` <a name="resetDirection" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.resetDirection"></a>

```java
public void resetDirection()
```

##### `resetEnableLogging` <a name="resetEnableLogging" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.resetEnableLogging"></a>

```java
public void resetEnableLogging()
```

##### `resetHeaderAction` <a name="resetHeaderAction" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.resetHeaderAction"></a>

```java
public void resetHeaderAction()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.resetId"></a>

```java
public void resetId()
```

##### `resetPreconfiguredWafConfig` <a name="resetPreconfiguredWafConfig" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.resetPreconfiguredWafConfig"></a>

```java
public void resetPreconfiguredWafConfig()
```

##### `resetPreview` <a name="resetPreview" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.resetPreview"></a>

```java
public void resetPreview()
```

##### `resetRedirectOptions` <a name="resetRedirectOptions" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.resetRedirectOptions"></a>

```java
public void resetRedirectOptions()
```

##### `resetTargetResources` <a name="resetTargetResources" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.resetTargetResources"></a>

```java
public void resetTargetResources()
```

##### `resetTargetServiceAccounts` <a name="resetTargetServiceAccounts" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.resetTargetServiceAccounts"></a>

```java
public void resetTargetServiceAccounts()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleComputeOrganizationSecurityPolicyRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_compute_organization_security_policy_rule.GoogleComputeOrganizationSecurityPolicyRule;

GoogleComputeOrganizationSecurityPolicyRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_compute_organization_security_policy_rule.GoogleComputeOrganizationSecurityPolicyRule;

GoogleComputeOrganizationSecurityPolicyRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_compute_organization_security_policy_rule.GoogleComputeOrganizationSecurityPolicyRule;

GoogleComputeOrganizationSecurityPolicyRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_compute_organization_security_policy_rule.GoogleComputeOrganizationSecurityPolicyRule;

GoogleComputeOrganizationSecurityPolicyRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleComputeOrganizationSecurityPolicyRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleComputeOrganizationSecurityPolicyRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleComputeOrganizationSecurityPolicyRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleComputeOrganizationSecurityPolicyRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_organization_security_policy_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleComputeOrganizationSecurityPolicyRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.headerAction">headerAction</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference">GoogleComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.match">match</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference">GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.preconfiguredWafConfig">preconfiguredWafConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference">GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.redirectOptions">redirectOptions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference">GoogleComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference">GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.directionInput">directionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.enableLoggingInput">enableLoggingInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.headerActionInput">headerActionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderAction">GoogleComputeOrganizationSecurityPolicyRuleHeaderAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.matchInput">matchInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatch">GoogleComputeOrganizationSecurityPolicyRuleMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.policyIdInput">policyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.preconfiguredWafConfigInput">preconfiguredWafConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig">GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.previewInput">previewInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.redirectOptionsInput">redirectOptionsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptions">GoogleComputeOrganizationSecurityPolicyRuleRedirectOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.targetResourcesInput">targetResourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.targetServiceAccountsInput">targetServiceAccountsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeouts">GoogleComputeOrganizationSecurityPolicyRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.direction">direction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.enableLogging">enableLogging</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.policyId">policyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.preview">preview</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.targetResources">targetResources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.targetServiceAccounts">targetServiceAccounts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `headerAction`<sup>Required</sup> <a name="headerAction" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.headerAction"></a>

```java
public GoogleComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference getHeaderAction();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference">GoogleComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference</a>

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.match"></a>

```java
public GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference getMatch();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference">GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference</a>

---

##### `preconfiguredWafConfig`<sup>Required</sup> <a name="preconfiguredWafConfig" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.preconfiguredWafConfig"></a>

```java
public GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference getPreconfiguredWafConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference">GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference</a>

---

##### `redirectOptions`<sup>Required</sup> <a name="redirectOptions" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.redirectOptions"></a>

```java
public GoogleComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference getRedirectOptions();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference">GoogleComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.timeouts"></a>

```java
public GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference">GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.directionInput"></a>

```java
public java.lang.String getDirectionInput();
```

- *Type:* java.lang.String

---

##### `enableLoggingInput`<sup>Optional</sup> <a name="enableLoggingInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.enableLoggingInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableLoggingInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `headerActionInput`<sup>Optional</sup> <a name="headerActionInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.headerActionInput"></a>

```java
public GoogleComputeOrganizationSecurityPolicyRuleHeaderAction getHeaderActionInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderAction">GoogleComputeOrganizationSecurityPolicyRuleHeaderAction</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `matchInput`<sup>Optional</sup> <a name="matchInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.matchInput"></a>

```java
public GoogleComputeOrganizationSecurityPolicyRuleMatch getMatchInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatch">GoogleComputeOrganizationSecurityPolicyRuleMatch</a>

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.policyIdInput"></a>

```java
public java.lang.String getPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `preconfiguredWafConfigInput`<sup>Optional</sup> <a name="preconfiguredWafConfigInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.preconfiguredWafConfigInput"></a>

```java
public GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig getPreconfiguredWafConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig">GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig</a>

---

##### `previewInput`<sup>Optional</sup> <a name="previewInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.previewInput"></a>

```java
public java.lang.Boolean|IResolvable getPreviewInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `redirectOptionsInput`<sup>Optional</sup> <a name="redirectOptionsInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.redirectOptionsInput"></a>

```java
public GoogleComputeOrganizationSecurityPolicyRuleRedirectOptions getRedirectOptionsInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptions">GoogleComputeOrganizationSecurityPolicyRuleRedirectOptions</a>

---

##### `targetResourcesInput`<sup>Optional</sup> <a name="targetResourcesInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.targetResourcesInput"></a>

```java
public java.util.List<java.lang.String> getTargetResourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetServiceAccountsInput`<sup>Optional</sup> <a name="targetServiceAccountsInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.targetServiceAccountsInput"></a>

```java
public java.util.List<java.lang.String> getTargetServiceAccountsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.timeoutsInput"></a>

```java
public IResolvable|GoogleComputeOrganizationSecurityPolicyRuleTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeouts">GoogleComputeOrganizationSecurityPolicyRuleTimeouts</a>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

---

##### `enableLogging`<sup>Required</sup> <a name="enableLogging" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.enableLogging"></a>

```java
public java.lang.Boolean|IResolvable getEnableLogging();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.policyId"></a>

```java
public java.lang.String getPolicyId();
```

- *Type:* java.lang.String

---

##### `preview`<sup>Required</sup> <a name="preview" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.preview"></a>

```java
public java.lang.Boolean|IResolvable getPreview();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `targetResources`<sup>Required</sup> <a name="targetResources" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.targetResources"></a>

```java
public java.util.List<java.lang.String> getTargetResources();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetServiceAccounts`<sup>Required</sup> <a name="targetServiceAccounts" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.targetServiceAccounts"></a>

```java
public java.util.List<java.lang.String> getTargetServiceAccounts();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeOrganizationSecurityPolicyRuleConfig <a name="GoogleComputeOrganizationSecurityPolicyRuleConfig" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_organization_security_policy_rule.GoogleComputeOrganizationSecurityPolicyRuleConfig;

GoogleComputeOrganizationSecurityPolicyRuleConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .action(java.lang.String)
    .match(GoogleComputeOrganizationSecurityPolicyRuleMatch)
    .policyId(java.lang.String)
    .priority(java.lang.Number)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .direction(java.lang.String)
//  .enableLogging(java.lang.Boolean|IResolvable)
//  .headerAction(GoogleComputeOrganizationSecurityPolicyRuleHeaderAction)
//  .id(java.lang.String)
//  .preconfiguredWafConfig(GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig)
//  .preview(java.lang.Boolean|IResolvable)
//  .redirectOptions(GoogleComputeOrganizationSecurityPolicyRuleRedirectOptions)
//  .targetResources(java.util.List<java.lang.String>)
//  .targetServiceAccounts(java.util.List<java.lang.String>)
//  .timeouts(GoogleComputeOrganizationSecurityPolicyRuleTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.action">action</a></code> | <code>java.lang.String</code> | The Action to perform when the client connection triggers the rule. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.match">match</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatch">GoogleComputeOrganizationSecurityPolicyRuleMatch</a></code> | match block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.policyId">policyId</a></code> | <code>java.lang.String</code> | The ID of the OrganizationSecurityPolicy this rule applies to. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.priority">priority</a></code> | <code>java.lang.Number</code> | An integer indicating the priority of a rule in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description of the rule. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.direction">direction</a></code> | <code>java.lang.String</code> | The direction in which this rule applies. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.enableLogging">enableLogging</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Denotes whether to enable logging for a particular rule. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.headerAction">headerAction</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderAction">GoogleComputeOrganizationSecurityPolicyRuleHeaderAction</a></code> | header_action block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_organization_security_policy_rule#id GoogleComputeOrganizationSecurityPolicyRule#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.preconfiguredWafConfig">preconfiguredWafConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig">GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig</a></code> | preconfigured_waf_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.preview">preview</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set to true, the specified action is not enforced. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.redirectOptions">redirectOptions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptions">GoogleComputeOrganizationSecurityPolicyRuleRedirectOptions</a></code> | redirect_options block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.targetResources">targetResources</a></code> | <code>java.util.List<java.lang.String></code> | A list of network resource URLs to which this rule applies. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.targetServiceAccounts">targetServiceAccounts</a></code> | <code>java.util.List<java.lang.String></code> | A list of service accounts indicating the sets of instances that are applied with this rule. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeouts">GoogleComputeOrganizationSecurityPolicyRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

The Action to perform when the client connection triggers the rule.

Valid actions are:
"allow": allow access to target.
"deny": deny access to target.
"goto_next": forward the request to the next hierarchical policy for evaluation.
"redirect": redirect to a different target. Parameters for this action can be configured via redirectOptions. Only EXTERNAL_302 redirect type is supported for organization security policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_organization_security_policy_rule#action GoogleComputeOrganizationSecurityPolicyRule#action}

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.match"></a>

```java
public GoogleComputeOrganizationSecurityPolicyRuleMatch getMatch();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatch">GoogleComputeOrganizationSecurityPolicyRuleMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_organization_security_policy_rule#match GoogleComputeOrganizationSecurityPolicyRule#match}

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.policyId"></a>

```java
public java.lang.String getPolicyId();
```

- *Type:* java.lang.String

The ID of the OrganizationSecurityPolicy this rule applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_organization_security_policy_rule#policy_id GoogleComputeOrganizationSecurityPolicyRule#policy_id}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

An integer indicating the priority of a rule in the list.

The priority must be a value
between 0 and 2147483647. Rules are evaluated from highest to lowest priority where 0 is the
highest priority and 2147483647 is the lowest prority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_organization_security_policy_rule#priority GoogleComputeOrganizationSecurityPolicyRule#priority}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_organization_security_policy_rule#deletion_policy GoogleComputeOrganizationSecurityPolicyRule#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_organization_security_policy_rule#description GoogleComputeOrganizationSecurityPolicyRule#description}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

The direction in which this rule applies.

If unspecified an INGRESS rule is created.
This field may only be specified when the versionedExpr is set to FIREWALL. Possible values: ["INGRESS", "EGRESS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_organization_security_policy_rule#direction GoogleComputeOrganizationSecurityPolicyRule#direction}

---

##### `enableLogging`<sup>Optional</sup> <a name="enableLogging" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.enableLogging"></a>

```java
public java.lang.Boolean|IResolvable getEnableLogging();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Denotes whether to enable logging for a particular rule.

If logging is enabled, logs will be exported to the
configured export destination in Stackdriver.
This field may only be specified when the versionedExpr is set to FIREWALL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_organization_security_policy_rule#enable_logging GoogleComputeOrganizationSecurityPolicyRule#enable_logging}

---

##### `headerAction`<sup>Optional</sup> <a name="headerAction" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.headerAction"></a>

```java
public GoogleComputeOrganizationSecurityPolicyRuleHeaderAction getHeaderAction();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderAction">GoogleComputeOrganizationSecurityPolicyRuleHeaderAction</a>

header_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_organization_security_policy_rule#header_action GoogleComputeOrganizationSecurityPolicyRule#header_action}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_organization_security_policy_rule#id GoogleComputeOrganizationSecurityPolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `preconfiguredWafConfig`<sup>Optional</sup> <a name="preconfiguredWafConfig" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.preconfiguredWafConfig"></a>

```java
public GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig getPreconfiguredWafConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig">GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig</a>

preconfigured_waf_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_organization_security_policy_rule#preconfigured_waf_config GoogleComputeOrganizationSecurityPolicyRule#preconfigured_waf_config}

---

##### `preview`<sup>Optional</sup> <a name="preview" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.preview"></a>

```java
public java.lang.Boolean|IResolvable getPreview();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set to true, the specified action is not enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_organization_security_policy_rule#preview GoogleComputeOrganizationSecurityPolicyRule#preview}

---

##### `redirectOptions`<sup>Optional</sup> <a name="redirectOptions" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.redirectOptions"></a>

```java
public GoogleComputeOrganizationSecurityPolicyRuleRedirectOptions getRedirectOptions();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptions">GoogleComputeOrganizationSecurityPolicyRuleRedirectOptions</a>

redirect_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_organization_security_policy_rule#redirect_options GoogleComputeOrganizationSecurityPolicyRule#redirect_options}

---

##### `targetResources`<sup>Optional</sup> <a name="targetResources" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.targetResources"></a>

```java
public java.util.List<java.lang.String> getTargetResources();
```

- *Type:* java.util.List<java.lang.String>

A list of network resource URLs to which this rule applies.

This field allows you to control which network's VMs get
this rule. If this field is left blank, all VMs
within the organization will receive the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_organization_security_policy_rule#target_resources GoogleComputeOrganizationSecurityPolicyRule#target_resources}

---

##### `targetServiceAccounts`<sup>Optional</sup> <a name="targetServiceAccounts" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.targetServiceAccounts"></a>

```java
public java.util.List<java.lang.String> getTargetServiceAccounts();
```

- *Type:* java.util.List<java.lang.String>

A list of service accounts indicating the sets of instances that are applied with this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_organization_security_policy_rule#target_service_accounts GoogleComputeOrganizationSecurityPolicyRule#target_service_accounts}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleConfig.property.timeouts"></a>

```java
public GoogleComputeOrganizationSecurityPolicyRuleTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeouts">GoogleComputeOrganizationSecurityPolicyRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_organization_security_policy_rule#timeouts GoogleComputeOrganizationSecurityPolicyRule#timeouts}

---

### GoogleComputeOrganizationSecurityPolicyRuleHeaderAction <a name="GoogleComputeOrganizationSecurityPolicyRuleHeaderAction" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderAction.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_organization_security_policy_rule.GoogleComputeOrganizationSecurityPolicyRuleHeaderAction;

GoogleComputeOrganizationSecurityPolicyRuleHeaderAction.builder()
//  .requestHeadersToAdds(IResolvable|java.util.List<GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderAction.property.requestHeadersToAdds">requestHeadersToAdds</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds">GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds</a>></code> | request_headers_to_adds block. |

---

##### `requestHeadersToAdds`<sup>Optional</sup> <a name="requestHeadersToAdds" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderAction.property.requestHeadersToAdds"></a>

```java
public IResolvable|java.util.List<GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds> getRequestHeadersToAdds();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds">GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds</a>>

request_headers_to_adds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_organization_security_policy_rule#request_headers_to_adds GoogleComputeOrganizationSecurityPolicyRule#request_headers_to_adds}

---

### GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds <a name="GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_organization_security_policy_rule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds;

GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds.builder()
//  .headerName(java.lang.String)
//  .headerValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds.property.headerName">headerName</a></code> | <code>java.lang.String</code> | The name of the header to set. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds.property.headerValue">headerValue</a></code> | <code>java.lang.String</code> | The value to set the named header to. |

---

##### `headerName`<sup>Optional</sup> <a name="headerName" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds.property.headerName"></a>

```java
public java.lang.String getHeaderName();
```

- *Type:* java.lang.String

The name of the header to set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_organization_security_policy_rule#header_name GoogleComputeOrganizationSecurityPolicyRule#header_name}

---

##### `headerValue`<sup>Optional</sup> <a name="headerValue" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds.property.headerValue"></a>

```java
public java.lang.String getHeaderValue();
```

- *Type:* java.lang.String

The value to set the named header to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_organization_security_policy_rule#header_value GoogleComputeOrganizationSecurityPolicyRule#header_value}

---

### GoogleComputeOrganizationSecurityPolicyRuleMatch <a name="GoogleComputeOrganizationSecurityPolicyRuleMatch" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatch.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_organization_security_policy_rule.GoogleComputeOrganizationSecurityPolicyRuleMatch;

GoogleComputeOrganizationSecurityPolicyRuleMatch.builder()
//  .config(GoogleComputeOrganizationSecurityPolicyRuleMatchConfig)
//  .description(java.lang.String)
//  .expr(GoogleComputeOrganizationSecurityPolicyRuleMatchExpr)
//  .versionedExpr(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatch.property.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfig">GoogleComputeOrganizationSecurityPolicyRuleMatchConfig</a></code> | config block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatch.property.description">description</a></code> | <code>java.lang.String</code> | A description of the rule. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatch.property.expr">expr</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchExpr">GoogleComputeOrganizationSecurityPolicyRuleMatchExpr</a></code> | expr block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatch.property.versionedExpr">versionedExpr</a></code> | <code>java.lang.String</code> | Preconfigured versioned expression. |

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatch.property.config"></a>

```java
public GoogleComputeOrganizationSecurityPolicyRuleMatchConfig getConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfig">GoogleComputeOrganizationSecurityPolicyRuleMatchConfig</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_organization_security_policy_rule#config GoogleComputeOrganizationSecurityPolicyRule#config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatch.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_organization_security_policy_rule#description GoogleComputeOrganizationSecurityPolicyRule#description}

---

##### `expr`<sup>Optional</sup> <a name="expr" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatch.property.expr"></a>

```java
public GoogleComputeOrganizationSecurityPolicyRuleMatchExpr getExpr();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchExpr">GoogleComputeOrganizationSecurityPolicyRuleMatchExpr</a>

expr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_organization_security_policy_rule#expr GoogleComputeOrganizationSecurityPolicyRule#expr}

---

##### `versionedExpr`<sup>Optional</sup> <a name="versionedExpr" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatch.property.versionedExpr"></a>

```java
public java.lang.String getVersionedExpr();
```

- *Type:* java.lang.String

Preconfigured versioned expression.

For organization security policy rules,
the only supported type is "SRC_IPS_V1".
**NOTE** : 'FIREWALL' type is deprecated. Please use 'google_compute_firewall_policy_rule' resource instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_organization_security_policy_rule#versioned_expr GoogleComputeOrganizationSecurityPolicyRule#versioned_expr}

---

### GoogleComputeOrganizationSecurityPolicyRuleMatchConfig <a name="GoogleComputeOrganizationSecurityPolicyRuleMatchConfig" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_organization_security_policy_rule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfig;

GoogleComputeOrganizationSecurityPolicyRuleMatchConfig.builder()
//  .destIpRanges(java.util.List<java.lang.String>)
//  .layer4Config(IResolvable|java.util.List<GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4Config>)
//  .srcIpRanges(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfig.property.destIpRanges">destIpRanges</a></code> | <code>java.util.List<java.lang.String></code> | Destination IP address range in CIDR format. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfig.property.layer4Config">layer4Config</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4Config">GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4Config</a>></code> | layer4_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfig.property.srcIpRanges">srcIpRanges</a></code> | <code>java.util.List<java.lang.String></code> | Source IP address range in CIDR format. Required for INGRESS rules. |

---

##### `destIpRanges`<sup>Optional</sup> <a name="destIpRanges" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfig.property.destIpRanges"></a>

```java
public java.util.List<java.lang.String> getDestIpRanges();
```

- *Type:* java.util.List<java.lang.String>

Destination IP address range in CIDR format.

Required for EGRESS rules.
This field may only be specified when versionedExpr is set to FIREWALL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_organization_security_policy_rule#dest_ip_ranges GoogleComputeOrganizationSecurityPolicyRule#dest_ip_ranges}

---

##### `layer4Config`<sup>Optional</sup> <a name="layer4Config" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfig.property.layer4Config"></a>

```java
public IResolvable|java.util.List<GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4Config> getLayer4Config();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4Config">GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4Config</a>>

layer4_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_organization_security_policy_rule#layer4_config GoogleComputeOrganizationSecurityPolicyRule#layer4_config}

---

##### `srcIpRanges`<sup>Optional</sup> <a name="srcIpRanges" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfig.property.srcIpRanges"></a>

```java
public java.util.List<java.lang.String> getSrcIpRanges();
```

- *Type:* java.util.List<java.lang.String>

Source IP address range in CIDR format. Required for INGRESS rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_organization_security_policy_rule#src_ip_ranges GoogleComputeOrganizationSecurityPolicyRule#src_ip_ranges}

---

### GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4Config <a name="GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4Config" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4Config.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_organization_security_policy_rule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4Config;

GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4Config.builder()
    .ipProtocol(java.lang.String)
//  .ports(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4Config.property.ipProtocol">ipProtocol</a></code> | <code>java.lang.String</code> | The IP protocol to which this rule applies. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4Config.property.ports">ports</a></code> | <code>java.util.List<java.lang.String></code> | An optional list of ports to which this rule applies. |

---

##### `ipProtocol`<sup>Required</sup> <a name="ipProtocol" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4Config.property.ipProtocol"></a>

```java
public java.lang.String getIpProtocol();
```

- *Type:* java.lang.String

The IP protocol to which this rule applies.

The protocol
type is required when creating a firewall rule.
This value can either be one of the following well
known protocol strings (tcp, udp, icmp, esp, ah, ipip, sctp),
or the IP protocol number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_organization_security_policy_rule#ip_protocol GoogleComputeOrganizationSecurityPolicyRule#ip_protocol}

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4Config.property.ports"></a>

```java
public java.util.List<java.lang.String> getPorts();
```

- *Type:* java.util.List<java.lang.String>

An optional list of ports to which this rule applies.

This field
is only applicable for UDP or TCP protocol. Each entry must be
either an integer or a range. If not specified, this rule
applies to connections through any port.

Example inputs include: ["22"], ["80","443"], and
["12345-12349"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_organization_security_policy_rule#ports GoogleComputeOrganizationSecurityPolicyRule#ports}

---

### GoogleComputeOrganizationSecurityPolicyRuleMatchExpr <a name="GoogleComputeOrganizationSecurityPolicyRuleMatchExpr" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchExpr"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchExpr.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_organization_security_policy_rule.GoogleComputeOrganizationSecurityPolicyRuleMatchExpr;

GoogleComputeOrganizationSecurityPolicyRuleMatchExpr.builder()
    .expression(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchExpr.property.expression">expression</a></code> | <code>java.lang.String</code> | Textual representation of an expression in Common Expression Language syntax. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchExpr.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Textual representation of an expression in Common Expression Language syntax.

The application context of the containing message determines which well-known feature set of CEL is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_organization_security_policy_rule#expression GoogleComputeOrganizationSecurityPolicyRule#expression}

---

### GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig <a name="GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_organization_security_policy_rule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig;

GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig.builder()
//  .exclusion(IResolvable|java.util.List<GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig.property.exclusion">exclusion</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion">GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion</a>></code> | exclusion block. |

---

##### `exclusion`<sup>Optional</sup> <a name="exclusion" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig.property.exclusion"></a>

```java
public IResolvable|java.util.List<GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion> getExclusion();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion">GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion</a>>

exclusion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_organization_security_policy_rule#exclusion GoogleComputeOrganizationSecurityPolicyRule#exclusion}

---

### GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion <a name="GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_organization_security_policy_rule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion;

GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion.builder()
    .targetRuleSet(java.lang.String)
//  .requestCookie(IResolvable|java.util.List<GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie>)
//  .requestHeader(IResolvable|java.util.List<GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader>)
//  .requestQueryParam(IResolvable|java.util.List<GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam>)
//  .requestUri(IResolvable|java.util.List<GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri>)
//  .targetRuleIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion.property.targetRuleSet">targetRuleSet</a></code> | <code>java.lang.String</code> | Target WAF rule set to apply the preconfigured WAF exclusion. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion.property.requestCookie">requestCookie</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie">GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie</a>></code> | request_cookie block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion.property.requestHeader">requestHeader</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader">GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader</a>></code> | request_header block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion.property.requestQueryParam">requestQueryParam</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam">GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam</a>></code> | request_query_param block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion.property.requestUri">requestUri</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri">GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri</a>></code> | request_uri block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion.property.targetRuleIds">targetRuleIds</a></code> | <code>java.util.List<java.lang.String></code> | A list of target rule IDs under the WAF rule set to apply the preconfigured WAF exclusion. |

---

##### `targetRuleSet`<sup>Required</sup> <a name="targetRuleSet" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion.property.targetRuleSet"></a>

```java
public java.lang.String getTargetRuleSet();
```

- *Type:* java.lang.String

Target WAF rule set to apply the preconfigured WAF exclusion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_organization_security_policy_rule#target_rule_set GoogleComputeOrganizationSecurityPolicyRule#target_rule_set}

---

##### `requestCookie`<sup>Optional</sup> <a name="requestCookie" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion.property.requestCookie"></a>

```java
public IResolvable|java.util.List<GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie> getRequestCookie();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie">GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie</a>>

request_cookie block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_organization_security_policy_rule#request_cookie GoogleComputeOrganizationSecurityPolicyRule#request_cookie}

---

##### `requestHeader`<sup>Optional</sup> <a name="requestHeader" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion.property.requestHeader"></a>

```java
public IResolvable|java.util.List<GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader> getRequestHeader();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader">GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader</a>>

request_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_organization_security_policy_rule#request_header GoogleComputeOrganizationSecurityPolicyRule#request_header}

---

##### `requestQueryParam`<sup>Optional</sup> <a name="requestQueryParam" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion.property.requestQueryParam"></a>

```java
public IResolvable|java.util.List<GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam> getRequestQueryParam();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam">GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam</a>>

request_query_param block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_organization_security_policy_rule#request_query_param GoogleComputeOrganizationSecurityPolicyRule#request_query_param}

---

##### `requestUri`<sup>Optional</sup> <a name="requestUri" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion.property.requestUri"></a>

```java
public IResolvable|java.util.List<GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri> getRequestUri();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri">GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri</a>>

request_uri block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_organization_security_policy_rule#request_uri GoogleComputeOrganizationSecurityPolicyRule#request_uri}

---

##### `targetRuleIds`<sup>Optional</sup> <a name="targetRuleIds" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion.property.targetRuleIds"></a>

```java
public java.util.List<java.lang.String> getTargetRuleIds();
```

- *Type:* java.util.List<java.lang.String>

A list of target rule IDs under the WAF rule set to apply the preconfigured WAF exclusion.

If omitted, it refers to all the rule IDs under the WAF rule set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_organization_security_policy_rule#target_rule_ids GoogleComputeOrganizationSecurityPolicyRule#target_rule_ids}

---

### GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie <a name="GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_organization_security_policy_rule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie;

GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie.builder()
    .operator(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie.property.operator">operator</a></code> | <code>java.lang.String</code> | You can specify an exact match or a partial match by using a field operator and a field value. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie.property.value">value</a></code> | <code>java.lang.String</code> | A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

You can specify an exact match or a partial match by using a field operator and a field value.

Available options:
EQUALS: The operator matches if the field value equals the specified value.
STARTS_WITH: The operator matches if the field value starts with the specified value.
ENDS_WITH: The operator matches if the field value ends with the specified value.
CONTAINS: The operator matches if the field value contains the specified value.
EQUALS_ANY: The operator matches if the field value is any value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_organization_security_policy_rule#operator GoogleComputeOrganizationSecurityPolicyRule#operator}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.

The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_organization_security_policy_rule#value GoogleComputeOrganizationSecurityPolicyRule#value}

---

### GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader <a name="GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_organization_security_policy_rule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader;

GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader.builder()
    .operator(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader.property.operator">operator</a></code> | <code>java.lang.String</code> | You can specify an exact match or a partial match by using a field operator and a field value. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader.property.value">value</a></code> | <code>java.lang.String</code> | A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

You can specify an exact match or a partial match by using a field operator and a field value.

Available options:
EQUALS: The operator matches if the field value equals the specified value.
STARTS_WITH: The operator matches if the field value starts with the specified value.
ENDS_WITH: The operator matches if the field value ends with the specified value.
CONTAINS: The operator matches if the field value contains the specified value.
EQUALS_ANY: The operator matches if the field value is any value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_organization_security_policy_rule#operator GoogleComputeOrganizationSecurityPolicyRule#operator}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.

The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_organization_security_policy_rule#value GoogleComputeOrganizationSecurityPolicyRule#value}

---

### GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam <a name="GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_organization_security_policy_rule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam;

GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam.builder()
    .operator(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam.property.operator">operator</a></code> | <code>java.lang.String</code> | You can specify an exact match or a partial match by using a field operator and a field value. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam.property.value">value</a></code> | <code>java.lang.String</code> | A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

You can specify an exact match or a partial match by using a field operator and a field value.

Available options:
EQUALS: The operator matches if the field value equals the specified value.
STARTS_WITH: The operator matches if the field value starts with the specified value.
ENDS_WITH: The operator matches if the field value ends with the specified value.
CONTAINS: The operator matches if the field value contains the specified value.
EQUALS_ANY: The operator matches if the field value is any value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_organization_security_policy_rule#operator GoogleComputeOrganizationSecurityPolicyRule#operator}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.

The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_organization_security_policy_rule#value GoogleComputeOrganizationSecurityPolicyRule#value}

---

### GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri <a name="GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_organization_security_policy_rule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri;

GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri.builder()
    .operator(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri.property.operator">operator</a></code> | <code>java.lang.String</code> | You can specify an exact match or a partial match by using a field operator and a field value. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri.property.value">value</a></code> | <code>java.lang.String</code> | A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

You can specify an exact match or a partial match by using a field operator and a field value.

Available options:
EQUALS: The operator matches if the field value equals the specified value.
STARTS_WITH: The operator matches if the field value starts with the specified value.
ENDS_WITH: The operator matches if the field value ends with the specified value.
CONTAINS: The operator matches if the field value contains the specified value.
EQUALS_ANY: The operator matches if the field value is any value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_organization_security_policy_rule#operator GoogleComputeOrganizationSecurityPolicyRule#operator}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.

The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_organization_security_policy_rule#value GoogleComputeOrganizationSecurityPolicyRule#value}

---

### GoogleComputeOrganizationSecurityPolicyRuleRedirectOptions <a name="GoogleComputeOrganizationSecurityPolicyRuleRedirectOptions" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptions.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_organization_security_policy_rule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptions;

GoogleComputeOrganizationSecurityPolicyRuleRedirectOptions.builder()
    .type(java.lang.String)
//  .target(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptions.property.type">type</a></code> | <code>java.lang.String</code> | Type of the redirect action. For organization security policies, only EXTERNAL_302 is supported. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptions.property.target">target</a></code> | <code>java.lang.String</code> | Target for the redirect action. This is required if the type is EXTERNAL_302. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptions.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Type of the redirect action. For organization security policies, only EXTERNAL_302 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_organization_security_policy_rule#type GoogleComputeOrganizationSecurityPolicyRule#type}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptions.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

Target for the redirect action. This is required if the type is EXTERNAL_302.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_organization_security_policy_rule#target GoogleComputeOrganizationSecurityPolicyRule#target}

---

### GoogleComputeOrganizationSecurityPolicyRuleTimeouts <a name="GoogleComputeOrganizationSecurityPolicyRuleTimeouts" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_organization_security_policy_rule.GoogleComputeOrganizationSecurityPolicyRuleTimeouts;

GoogleComputeOrganizationSecurityPolicyRuleTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_organization_security_policy_rule#create GoogleComputeOrganizationSecurityPolicyRule#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_organization_security_policy_rule#delete GoogleComputeOrganizationSecurityPolicyRule#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_organization_security_policy_rule#update GoogleComputeOrganizationSecurityPolicyRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_organization_security_policy_rule#create GoogleComputeOrganizationSecurityPolicyRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_organization_security_policy_rule#delete GoogleComputeOrganizationSecurityPolicyRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_compute_organization_security_policy_rule#update GoogleComputeOrganizationSecurityPolicyRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference <a name="GoogleComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_organization_security_policy_rule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference;

new GoogleComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.putRequestHeadersToAdds">putRequestHeadersToAdds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.resetRequestHeadersToAdds">resetRequestHeadersToAdds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRequestHeadersToAdds` <a name="putRequestHeadersToAdds" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.putRequestHeadersToAdds"></a>

```java
public void putRequestHeadersToAdds(IResolvable|java.util.List<GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.putRequestHeadersToAdds.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds">GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds</a>>

---

##### `resetRequestHeadersToAdds` <a name="resetRequestHeadersToAdds" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.resetRequestHeadersToAdds"></a>

```java
public void resetRequestHeadersToAdds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.property.requestHeadersToAdds">requestHeadersToAdds</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList">GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.property.requestHeadersToAddsInput">requestHeadersToAddsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds">GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderAction">GoogleComputeOrganizationSecurityPolicyRuleHeaderAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `requestHeadersToAdds`<sup>Required</sup> <a name="requestHeadersToAdds" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.property.requestHeadersToAdds"></a>

```java
public GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList getRequestHeadersToAdds();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList">GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList</a>

---

##### `requestHeadersToAddsInput`<sup>Optional</sup> <a name="requestHeadersToAddsInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.property.requestHeadersToAddsInput"></a>

```java
public IResolvable|java.util.List<GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds> getRequestHeadersToAddsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds">GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionOutputReference.property.internalValue"></a>

```java
public GoogleComputeOrganizationSecurityPolicyRuleHeaderAction getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderAction">GoogleComputeOrganizationSecurityPolicyRuleHeaderAction</a>

---


### GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList <a name="GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_organization_security_policy_rule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList;

new GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.get"></a>

```java
public GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds">GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds">GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds</a>>

---


### GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference <a name="GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_organization_security_policy_rule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference;

new GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.resetHeaderName">resetHeaderName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.resetHeaderValue">resetHeaderValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHeaderName` <a name="resetHeaderName" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.resetHeaderName"></a>

```java
public void resetHeaderName()
```

##### `resetHeaderValue` <a name="resetHeaderValue" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.resetHeaderValue"></a>

```java
public void resetHeaderValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.headerNameInput">headerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.headerValueInput">headerValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.headerName">headerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.headerValue">headerValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds">GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `headerNameInput`<sup>Optional</sup> <a name="headerNameInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.headerNameInput"></a>

```java
public java.lang.String getHeaderNameInput();
```

- *Type:* java.lang.String

---

##### `headerValueInput`<sup>Optional</sup> <a name="headerValueInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.headerValueInput"></a>

```java
public java.lang.String getHeaderValueInput();
```

- *Type:* java.lang.String

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.headerName"></a>

```java
public java.lang.String getHeaderName();
```

- *Type:* java.lang.String

---

##### `headerValue`<sup>Required</sup> <a name="headerValue" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.headerValue"></a>

```java
public java.lang.String getHeaderValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds">GoogleComputeOrganizationSecurityPolicyRuleHeaderActionRequestHeadersToAdds</a>

---


### GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList <a name="GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_organization_security_policy_rule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList;

new GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.get"></a>

```java
public GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4Config">GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4Config</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4Config> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4Config">GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4Config</a>>

---


### GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference <a name="GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_organization_security_policy_rule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference;

new GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.resetPorts">resetPorts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPorts` <a name="resetPorts" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.resetPorts"></a>

```java
public void resetPorts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.property.ipProtocolInput">ipProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.property.portsInput">portsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.property.ipProtocol">ipProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.property.ports">ports</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4Config">GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4Config</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipProtocolInput`<sup>Optional</sup> <a name="ipProtocolInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.property.ipProtocolInput"></a>

```java
public java.lang.String getIpProtocolInput();
```

- *Type:* java.lang.String

---

##### `portsInput`<sup>Optional</sup> <a name="portsInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.property.portsInput"></a>

```java
public java.util.List<java.lang.String> getPortsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipProtocol`<sup>Required</sup> <a name="ipProtocol" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.property.ipProtocol"></a>

```java
public java.lang.String getIpProtocol();
```

- *Type:* java.lang.String

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.property.ports"></a>

```java
public java.util.List<java.lang.String> getPorts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4Config getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4Config">GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4Config</a>

---


### GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference <a name="GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_organization_security_policy_rule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference;

new GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.putLayer4Config">putLayer4Config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.resetDestIpRanges">resetDestIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.resetLayer4Config">resetLayer4Config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.resetSrcIpRanges">resetSrcIpRanges</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLayer4Config` <a name="putLayer4Config" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.putLayer4Config"></a>

```java
public void putLayer4Config(IResolvable|java.util.List<GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4Config> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.putLayer4Config.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4Config">GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4Config</a>>

---

##### `resetDestIpRanges` <a name="resetDestIpRanges" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.resetDestIpRanges"></a>

```java
public void resetDestIpRanges()
```

##### `resetLayer4Config` <a name="resetLayer4Config" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.resetLayer4Config"></a>

```java
public void resetLayer4Config()
```

##### `resetSrcIpRanges` <a name="resetSrcIpRanges" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.resetSrcIpRanges"></a>

```java
public void resetSrcIpRanges()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.layer4Config">layer4Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList">GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.destIpRangesInput">destIpRangesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.layer4ConfigInput">layer4ConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4Config">GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4Config</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.srcIpRangesInput">srcIpRangesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.destIpRanges">destIpRanges</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.srcIpRanges">srcIpRanges</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfig">GoogleComputeOrganizationSecurityPolicyRuleMatchConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `layer4Config`<sup>Required</sup> <a name="layer4Config" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.layer4Config"></a>

```java
public GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList getLayer4Config();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList">GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4ConfigList</a>

---

##### `destIpRangesInput`<sup>Optional</sup> <a name="destIpRangesInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.destIpRangesInput"></a>

```java
public java.util.List<java.lang.String> getDestIpRangesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `layer4ConfigInput`<sup>Optional</sup> <a name="layer4ConfigInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.layer4ConfigInput"></a>

```java
public IResolvable|java.util.List<GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4Config> getLayer4ConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4Config">GoogleComputeOrganizationSecurityPolicyRuleMatchConfigLayer4Config</a>>

---

##### `srcIpRangesInput`<sup>Optional</sup> <a name="srcIpRangesInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.srcIpRangesInput"></a>

```java
public java.util.List<java.lang.String> getSrcIpRangesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destIpRanges`<sup>Required</sup> <a name="destIpRanges" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.destIpRanges"></a>

```java
public java.util.List<java.lang.String> getDestIpRanges();
```

- *Type:* java.util.List<java.lang.String>

---

##### `srcIpRanges`<sup>Required</sup> <a name="srcIpRanges" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.srcIpRanges"></a>

```java
public java.util.List<java.lang.String> getSrcIpRanges();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference.property.internalValue"></a>

```java
public GoogleComputeOrganizationSecurityPolicyRuleMatchConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfig">GoogleComputeOrganizationSecurityPolicyRuleMatchConfig</a>

---


### GoogleComputeOrganizationSecurityPolicyRuleMatchExprOutputReference <a name="GoogleComputeOrganizationSecurityPolicyRuleMatchExprOutputReference" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchExprOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_organization_security_policy_rule.GoogleComputeOrganizationSecurityPolicyRuleMatchExprOutputReference;

new GoogleComputeOrganizationSecurityPolicyRuleMatchExprOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchExpr">GoogleComputeOrganizationSecurityPolicyRuleMatchExpr</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchExprOutputReference.property.internalValue"></a>

```java
public GoogleComputeOrganizationSecurityPolicyRuleMatchExpr getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchExpr">GoogleComputeOrganizationSecurityPolicyRuleMatchExpr</a>

---


### GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference <a name="GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_organization_security_policy_rule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference;

new GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.putExpr">putExpr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.resetConfig">resetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.resetExpr">resetExpr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.resetVersionedExpr">resetVersionedExpr</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConfig` <a name="putConfig" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.putConfig"></a>

```java
public void putConfig(GoogleComputeOrganizationSecurityPolicyRuleMatchConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfig">GoogleComputeOrganizationSecurityPolicyRuleMatchConfig</a>

---

##### `putExpr` <a name="putExpr" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.putExpr"></a>

```java
public void putExpr(GoogleComputeOrganizationSecurityPolicyRuleMatchExpr value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.putExpr.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchExpr">GoogleComputeOrganizationSecurityPolicyRuleMatchExpr</a>

---

##### `resetConfig` <a name="resetConfig" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.resetConfig"></a>

```java
public void resetConfig()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetExpr` <a name="resetExpr" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.resetExpr"></a>

```java
public void resetExpr()
```

##### `resetVersionedExpr` <a name="resetVersionedExpr" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.resetVersionedExpr"></a>

```java
public void resetVersionedExpr()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference">GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.expr">expr</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchExprOutputReference">GoogleComputeOrganizationSecurityPolicyRuleMatchExprOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.configInput">configInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfig">GoogleComputeOrganizationSecurityPolicyRuleMatchConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.exprInput">exprInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchExpr">GoogleComputeOrganizationSecurityPolicyRuleMatchExpr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.versionedExprInput">versionedExprInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.versionedExpr">versionedExpr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatch">GoogleComputeOrganizationSecurityPolicyRuleMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.config"></a>

```java
public GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference getConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference">GoogleComputeOrganizationSecurityPolicyRuleMatchConfigOutputReference</a>

---

##### `expr`<sup>Required</sup> <a name="expr" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.expr"></a>

```java
public GoogleComputeOrganizationSecurityPolicyRuleMatchExprOutputReference getExpr();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchExprOutputReference">GoogleComputeOrganizationSecurityPolicyRuleMatchExprOutputReference</a>

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.configInput"></a>

```java
public GoogleComputeOrganizationSecurityPolicyRuleMatchConfig getConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchConfig">GoogleComputeOrganizationSecurityPolicyRuleMatchConfig</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `exprInput`<sup>Optional</sup> <a name="exprInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.exprInput"></a>

```java
public GoogleComputeOrganizationSecurityPolicyRuleMatchExpr getExprInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchExpr">GoogleComputeOrganizationSecurityPolicyRuleMatchExpr</a>

---

##### `versionedExprInput`<sup>Optional</sup> <a name="versionedExprInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.versionedExprInput"></a>

```java
public java.lang.String getVersionedExprInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `versionedExpr`<sup>Required</sup> <a name="versionedExpr" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.versionedExpr"></a>

```java
public java.lang.String getVersionedExpr();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatchOutputReference.property.internalValue"></a>

```java
public GoogleComputeOrganizationSecurityPolicyRuleMatch getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleMatch">GoogleComputeOrganizationSecurityPolicyRuleMatch</a>

---


### GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList <a name="GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_organization_security_policy_rule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList;

new GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.get"></a>

```java
public GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion">GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion">GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion</a>>

---


### GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference <a name="GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_organization_security_policy_rule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference;

new GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestCookie">putRequestCookie</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestHeader">putRequestHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestQueryParam">putRequestQueryParam</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestUri">putRequestUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetRequestCookie">resetRequestCookie</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetRequestHeader">resetRequestHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetRequestQueryParam">resetRequestQueryParam</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetRequestUri">resetRequestUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetTargetRuleIds">resetTargetRuleIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRequestCookie` <a name="putRequestCookie" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestCookie"></a>

```java
public void putRequestCookie(IResolvable|java.util.List<GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestCookie.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie">GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie</a>>

---

##### `putRequestHeader` <a name="putRequestHeader" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestHeader"></a>

```java
public void putRequestHeader(IResolvable|java.util.List<GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestHeader.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader">GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader</a>>

---

##### `putRequestQueryParam` <a name="putRequestQueryParam" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestQueryParam"></a>

```java
public void putRequestQueryParam(IResolvable|java.util.List<GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestQueryParam.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam">GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam</a>>

---

##### `putRequestUri` <a name="putRequestUri" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestUri"></a>

```java
public void putRequestUri(IResolvable|java.util.List<GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestUri.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri">GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri</a>>

---

##### `resetRequestCookie` <a name="resetRequestCookie" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetRequestCookie"></a>

```java
public void resetRequestCookie()
```

##### `resetRequestHeader` <a name="resetRequestHeader" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetRequestHeader"></a>

```java
public void resetRequestHeader()
```

##### `resetRequestQueryParam` <a name="resetRequestQueryParam" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetRequestQueryParam"></a>

```java
public void resetRequestQueryParam()
```

##### `resetRequestUri` <a name="resetRequestUri" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetRequestUri"></a>

```java
public void resetRequestUri()
```

##### `resetTargetRuleIds` <a name="resetTargetRuleIds" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetTargetRuleIds"></a>

```java
public void resetTargetRuleIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestCookie">requestCookie</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList">GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestHeader">requestHeader</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList">GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestQueryParam">requestQueryParam</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList">GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestUri">requestUri</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList">GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestCookieInput">requestCookieInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie">GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestHeaderInput">requestHeaderInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader">GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestQueryParamInput">requestQueryParamInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam">GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestUriInput">requestUriInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri">GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleIdsInput">targetRuleIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleSetInput">targetRuleSetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleIds">targetRuleIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleSet">targetRuleSet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion">GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `requestCookie`<sup>Required</sup> <a name="requestCookie" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestCookie"></a>

```java
public GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList getRequestCookie();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList">GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList</a>

---

##### `requestHeader`<sup>Required</sup> <a name="requestHeader" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestHeader"></a>

```java
public GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList getRequestHeader();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList">GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList</a>

---

##### `requestQueryParam`<sup>Required</sup> <a name="requestQueryParam" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestQueryParam"></a>

```java
public GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList getRequestQueryParam();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList">GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList</a>

---

##### `requestUri`<sup>Required</sup> <a name="requestUri" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestUri"></a>

```java
public GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList getRequestUri();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList">GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList</a>

---

##### `requestCookieInput`<sup>Optional</sup> <a name="requestCookieInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestCookieInput"></a>

```java
public IResolvable|java.util.List<GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie> getRequestCookieInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie">GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie</a>>

---

##### `requestHeaderInput`<sup>Optional</sup> <a name="requestHeaderInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestHeaderInput"></a>

```java
public IResolvable|java.util.List<GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader> getRequestHeaderInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader">GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader</a>>

---

##### `requestQueryParamInput`<sup>Optional</sup> <a name="requestQueryParamInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestQueryParamInput"></a>

```java
public IResolvable|java.util.List<GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam> getRequestQueryParamInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam">GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam</a>>

---

##### `requestUriInput`<sup>Optional</sup> <a name="requestUriInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestUriInput"></a>

```java
public IResolvable|java.util.List<GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri> getRequestUriInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri">GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri</a>>

---

##### `targetRuleIdsInput`<sup>Optional</sup> <a name="targetRuleIdsInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleIdsInput"></a>

```java
public java.util.List<java.lang.String> getTargetRuleIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetRuleSetInput`<sup>Optional</sup> <a name="targetRuleSetInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleSetInput"></a>

```java
public java.lang.String getTargetRuleSetInput();
```

- *Type:* java.lang.String

---

##### `targetRuleIds`<sup>Required</sup> <a name="targetRuleIds" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleIds"></a>

```java
public java.util.List<java.lang.String> getTargetRuleIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetRuleSet`<sup>Required</sup> <a name="targetRuleSet" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleSet"></a>

```java
public java.lang.String getTargetRuleSet();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion">GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion</a>

---


### GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList <a name="GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_organization_security_policy_rule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList;

new GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.get"></a>

```java
public GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie">GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie">GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie</a>>

---


### GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference <a name="GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_organization_security_policy_rule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference;

new GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie">GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie">GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie</a>

---


### GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList <a name="GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_organization_security_policy_rule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList;

new GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.get"></a>

```java
public GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader">GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader">GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader</a>>

---


### GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference <a name="GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_organization_security_policy_rule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference;

new GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader">GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader">GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader</a>

---


### GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList <a name="GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_organization_security_policy_rule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList;

new GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.get"></a>

```java
public GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam">GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam">GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam</a>>

---


### GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference <a name="GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_organization_security_policy_rule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference;

new GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam">GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam">GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam</a>

---


### GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList <a name="GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_organization_security_policy_rule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList;

new GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.get"></a>

```java
public GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri">GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri">GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri</a>>

---


### GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference <a name="GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_organization_security_policy_rule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference;

new GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri">GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri">GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri</a>

---


### GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference <a name="GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_organization_security_policy_rule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference;

new GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.putExclusion">putExclusion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.resetExclusion">resetExclusion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExclusion` <a name="putExclusion" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.putExclusion"></a>

```java
public void putExclusion(IResolvable|java.util.List<GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.putExclusion.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion">GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion</a>>

---

##### `resetExclusion` <a name="resetExclusion" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.resetExclusion"></a>

```java
public void resetExclusion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.exclusion">exclusion</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList">GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.exclusionInput">exclusionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion">GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig">GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `exclusion`<sup>Required</sup> <a name="exclusion" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.exclusion"></a>

```java
public GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList getExclusion();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList">GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusionList</a>

---

##### `exclusionInput`<sup>Optional</sup> <a name="exclusionInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.exclusionInput"></a>

```java
public IResolvable|java.util.List<GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion> getExclusionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion">GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigExclusion</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.internalValue"></a>

```java
public GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig">GoogleComputeOrganizationSecurityPolicyRulePreconfiguredWafConfig</a>

---


### GoogleComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference <a name="GoogleComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_organization_security_policy_rule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference;

new GoogleComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.resetTarget">resetTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTarget` <a name="resetTarget" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.resetTarget"></a>

```java
public void resetTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.property.targetInput">targetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.property.target">target</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptions">GoogleComputeOrganizationSecurityPolicyRuleRedirectOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.property.targetInput"></a>

```java
public java.lang.String getTargetInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptionsOutputReference.property.internalValue"></a>

```java
public GoogleComputeOrganizationSecurityPolicyRuleRedirectOptions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleRedirectOptions">GoogleComputeOrganizationSecurityPolicyRuleRedirectOptions</a>

---


### GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference <a name="GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_organization_security_policy_rule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference;

new GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeouts">GoogleComputeOrganizationSecurityPolicyRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleComputeOrganizationSecurityPolicyRuleTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicyRule.GoogleComputeOrganizationSecurityPolicyRuleTimeouts">GoogleComputeOrganizationSecurityPolicyRuleTimeouts</a>

---



