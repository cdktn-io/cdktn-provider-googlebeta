# `googleContactCenterInsightsQaQuestion` Submodule <a name="`googleContactCenterInsightsQaQuestion` Submodule" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleContactCenterInsightsQaQuestion <a name="GoogleContactCenterInsightsQaQuestion" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_qa_question google_contact_center_insights_qa_question}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_contact_center_insights_qa_question.GoogleContactCenterInsightsQaQuestion;

GoogleContactCenterInsightsQaQuestion.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .qaScorecard(java.lang.String)
    .revision(java.lang.String)
//  .abbreviation(java.lang.String)
//  .answerChoices(IResolvable|java.util.List<GoogleContactCenterInsightsQaQuestionAnswerChoices>)
//  .answerInstructions(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .metrics(GoogleContactCenterInsightsQaQuestionMetrics)
//  .order(java.lang.Number)
//  .predefinedQuestionConfig(GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig)
//  .project(java.lang.String)
//  .qaQuestionDataOptions(GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions)
//  .questionBody(java.lang.String)
//  .questionType(java.lang.String)
//  .tags(java.util.List<java.lang.String>)
//  .timeouts(GoogleContactCenterInsightsQaQuestionTimeouts)
//  .tuningMetadata(GoogleContactCenterInsightsQaQuestionTuningMetadata)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.qaScorecard">qaScorecard</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.revision">revision</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.abbreviation">abbreviation</a></code> | <code>java.lang.String</code> | Short, descriptive string, used in the UI where it's not practical to display the full question body. E.g., "Greeting". |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.answerChoices">answerChoices</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoices">GoogleContactCenterInsightsQaQuestionAnswerChoices</a>></code> | answer_choices block. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.answerInstructions">answerInstructions</a></code> | <code>java.lang.String</code> | Instructions describing how to determine the answer. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_qa_question#id GoogleContactCenterInsightsQaQuestion#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.metrics">metrics</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetrics">GoogleContactCenterInsightsQaQuestionMetrics</a></code> | metrics block. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.order">order</a></code> | <code>java.lang.Number</code> | Defines the order of the question within its parent scorecard revision. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.predefinedQuestionConfig">predefinedQuestionConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig">GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig</a></code> | predefined_question_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_qa_question#project GoogleContactCenterInsightsQaQuestion#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.qaQuestionDataOptions">qaQuestionDataOptions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions">GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions</a></code> | qa_question_data_options block. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.questionBody">questionBody</a></code> | <code>java.lang.String</code> | Question text. E.g., "Did the agent greet the customer?". |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.questionType">questionType</a></code> | <code>java.lang.String</code> | The type of question. Possible values: CUSTOMIZABLE PREDEFINED. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Questions are tagged for categorization and scoring. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeouts">GoogleContactCenterInsightsQaQuestionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.tuningMetadata">tuningMetadata</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadata">GoogleContactCenterInsightsQaQuestionTuningMetadata</a></code> | tuning_metadata block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_qa_question#location GoogleContactCenterInsightsQaQuestion#location}

---

##### `qaScorecard`<sup>Required</sup> <a name="qaScorecard" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.qaScorecard"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_qa_question#qa_scorecard GoogleContactCenterInsightsQaQuestion#qa_scorecard}

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.revision"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_qa_question#revision GoogleContactCenterInsightsQaQuestion#revision}

---

##### `abbreviation`<sup>Optional</sup> <a name="abbreviation" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.abbreviation"></a>

- *Type:* java.lang.String

Short, descriptive string, used in the UI where it's not practical to display the full question body. E.g., "Greeting".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_qa_question#abbreviation GoogleContactCenterInsightsQaQuestion#abbreviation}

---

##### `answerChoices`<sup>Optional</sup> <a name="answerChoices" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.answerChoices"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoices">GoogleContactCenterInsightsQaQuestionAnswerChoices</a>>

answer_choices block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_qa_question#answer_choices GoogleContactCenterInsightsQaQuestion#answer_choices}

---

##### `answerInstructions`<sup>Optional</sup> <a name="answerInstructions" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.answerInstructions"></a>

- *Type:* java.lang.String

Instructions describing how to determine the answer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_qa_question#answer_instructions GoogleContactCenterInsightsQaQuestion#answer_instructions}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_qa_question#deletion_policy GoogleContactCenterInsightsQaQuestion#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_qa_question#id GoogleContactCenterInsightsQaQuestion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metrics`<sup>Optional</sup> <a name="metrics" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.metrics"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetrics">GoogleContactCenterInsightsQaQuestionMetrics</a>

metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_qa_question#metrics GoogleContactCenterInsightsQaQuestion#metrics}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.order"></a>

- *Type:* java.lang.Number

Defines the order of the question within its parent scorecard revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_qa_question#order GoogleContactCenterInsightsQaQuestion#order}

---

##### `predefinedQuestionConfig`<sup>Optional</sup> <a name="predefinedQuestionConfig" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.predefinedQuestionConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig">GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig</a>

predefined_question_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_qa_question#predefined_question_config GoogleContactCenterInsightsQaQuestion#predefined_question_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_qa_question#project GoogleContactCenterInsightsQaQuestion#project}.

---

##### `qaQuestionDataOptions`<sup>Optional</sup> <a name="qaQuestionDataOptions" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.qaQuestionDataOptions"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions">GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions</a>

qa_question_data_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_qa_question#qa_question_data_options GoogleContactCenterInsightsQaQuestion#qa_question_data_options}

---

##### `questionBody`<sup>Optional</sup> <a name="questionBody" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.questionBody"></a>

- *Type:* java.lang.String

Question text. E.g., "Did the agent greet the customer?".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_qa_question#question_body GoogleContactCenterInsightsQaQuestion#question_body}

---

##### `questionType`<sup>Optional</sup> <a name="questionType" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.questionType"></a>

- *Type:* java.lang.String

The type of question. Possible values: CUSTOMIZABLE PREDEFINED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_qa_question#question_type GoogleContactCenterInsightsQaQuestion#question_type}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.tags"></a>

- *Type:* java.util.List<java.lang.String>

Questions are tagged for categorization and scoring.

Tags can either be:

* Default Tags: These are predefined categories. They are identified by
  their string value (e.g., "BUSINESS", "COMPLIANCE", and "CUSTOMER").
* Custom Tags: These are user-defined categories. They are identified by
  their full resource name (e.g.,
  projects/{project}/locations/{location}/qaQuestionTags/{qa_question_tag}).
  Both default and custom tags are used to group questions and to influence
  the scoring of each question.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_qa_question#tags GoogleContactCenterInsightsQaQuestion#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeouts">GoogleContactCenterInsightsQaQuestionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_qa_question#timeouts GoogleContactCenterInsightsQaQuestion#timeouts}

---

##### `tuningMetadata`<sup>Optional</sup> <a name="tuningMetadata" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.tuningMetadata"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadata">GoogleContactCenterInsightsQaQuestionTuningMetadata</a>

tuning_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_qa_question#tuning_metadata GoogleContactCenterInsightsQaQuestion#tuning_metadata}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.putAnswerChoices">putAnswerChoices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.putMetrics">putMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.putPredefinedQuestionConfig">putPredefinedQuestionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.putQaQuestionDataOptions">putQaQuestionDataOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.putTuningMetadata">putTuningMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetAbbreviation">resetAbbreviation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetAnswerChoices">resetAnswerChoices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetAnswerInstructions">resetAnswerInstructions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetMetrics">resetMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetOrder">resetOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetPredefinedQuestionConfig">resetPredefinedQuestionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetQaQuestionDataOptions">resetQaQuestionDataOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetQuestionBody">resetQuestionBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetQuestionType">resetQuestionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetTuningMetadata">resetTuningMetadata</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAnswerChoices` <a name="putAnswerChoices" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.putAnswerChoices"></a>

```java
public void putAnswerChoices(IResolvable|java.util.List<GoogleContactCenterInsightsQaQuestionAnswerChoices> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.putAnswerChoices.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoices">GoogleContactCenterInsightsQaQuestionAnswerChoices</a>>

---

##### `putMetrics` <a name="putMetrics" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.putMetrics"></a>

```java
public void putMetrics(GoogleContactCenterInsightsQaQuestionMetrics value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.putMetrics.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetrics">GoogleContactCenterInsightsQaQuestionMetrics</a>

---

##### `putPredefinedQuestionConfig` <a name="putPredefinedQuestionConfig" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.putPredefinedQuestionConfig"></a>

```java
public void putPredefinedQuestionConfig(GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.putPredefinedQuestionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig">GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig</a>

---

##### `putQaQuestionDataOptions` <a name="putQaQuestionDataOptions" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.putQaQuestionDataOptions"></a>

```java
public void putQaQuestionDataOptions(GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.putQaQuestionDataOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions">GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.putTimeouts"></a>

```java
public void putTimeouts(GoogleContactCenterInsightsQaQuestionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeouts">GoogleContactCenterInsightsQaQuestionTimeouts</a>

---

##### `putTuningMetadata` <a name="putTuningMetadata" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.putTuningMetadata"></a>

```java
public void putTuningMetadata(GoogleContactCenterInsightsQaQuestionTuningMetadata value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.putTuningMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadata">GoogleContactCenterInsightsQaQuestionTuningMetadata</a>

---

##### `resetAbbreviation` <a name="resetAbbreviation" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetAbbreviation"></a>

```java
public void resetAbbreviation()
```

##### `resetAnswerChoices` <a name="resetAnswerChoices" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetAnswerChoices"></a>

```java
public void resetAnswerChoices()
```

##### `resetAnswerInstructions` <a name="resetAnswerInstructions" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetAnswerInstructions"></a>

```java
public void resetAnswerInstructions()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetId"></a>

```java
public void resetId()
```

##### `resetMetrics` <a name="resetMetrics" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetMetrics"></a>

```java
public void resetMetrics()
```

##### `resetOrder` <a name="resetOrder" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetOrder"></a>

```java
public void resetOrder()
```

##### `resetPredefinedQuestionConfig` <a name="resetPredefinedQuestionConfig" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetPredefinedQuestionConfig"></a>

```java
public void resetPredefinedQuestionConfig()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetProject"></a>

```java
public void resetProject()
```

##### `resetQaQuestionDataOptions` <a name="resetQaQuestionDataOptions" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetQaQuestionDataOptions"></a>

```java
public void resetQaQuestionDataOptions()
```

##### `resetQuestionBody` <a name="resetQuestionBody" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetQuestionBody"></a>

```java
public void resetQuestionBody()
```

##### `resetQuestionType` <a name="resetQuestionType" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetQuestionType"></a>

```java
public void resetQuestionType()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTuningMetadata` <a name="resetTuningMetadata" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetTuningMetadata"></a>

```java
public void resetTuningMetadata()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleContactCenterInsightsQaQuestion resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_contact_center_insights_qa_question.GoogleContactCenterInsightsQaQuestion;

GoogleContactCenterInsightsQaQuestion.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_contact_center_insights_qa_question.GoogleContactCenterInsightsQaQuestion;

GoogleContactCenterInsightsQaQuestion.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_contact_center_insights_qa_question.GoogleContactCenterInsightsQaQuestion;

GoogleContactCenterInsightsQaQuestion.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_contact_center_insights_qa_question.GoogleContactCenterInsightsQaQuestion;

GoogleContactCenterInsightsQaQuestion.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleContactCenterInsightsQaQuestion.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleContactCenterInsightsQaQuestion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleContactCenterInsightsQaQuestion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleContactCenterInsightsQaQuestion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_qa_question#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleContactCenterInsightsQaQuestion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.answerChoices">answerChoices</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList">GoogleContactCenterInsightsQaQuestionAnswerChoicesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.metrics">metrics</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference">GoogleContactCenterInsightsQaQuestionMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.predefinedQuestionConfig">predefinedQuestionConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference">GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.qaQuestionDataOptions">qaQuestionDataOptions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference">GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference">GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.tuningMetadata">tuningMetadata</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference">GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.abbreviationInput">abbreviationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.answerChoicesInput">answerChoicesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoices">GoogleContactCenterInsightsQaQuestionAnswerChoices</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.answerInstructionsInput">answerInstructionsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.metricsInput">metricsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetrics">GoogleContactCenterInsightsQaQuestionMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.orderInput">orderInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.predefinedQuestionConfigInput">predefinedQuestionConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig">GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.qaQuestionDataOptionsInput">qaQuestionDataOptionsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions">GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.qaScorecardInput">qaScorecardInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.questionBodyInput">questionBodyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.questionTypeInput">questionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.revisionInput">revisionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeouts">GoogleContactCenterInsightsQaQuestionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.tuningMetadataInput">tuningMetadataInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadata">GoogleContactCenterInsightsQaQuestionTuningMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.abbreviation">abbreviation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.answerInstructions">answerInstructions</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.order">order</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.qaScorecard">qaScorecard</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.questionBody">questionBody</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.questionType">questionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.revision">revision</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `answerChoices`<sup>Required</sup> <a name="answerChoices" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.answerChoices"></a>

```java
public GoogleContactCenterInsightsQaQuestionAnswerChoicesList getAnswerChoices();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList">GoogleContactCenterInsightsQaQuestionAnswerChoicesList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.metrics"></a>

```java
public GoogleContactCenterInsightsQaQuestionMetricsOutputReference getMetrics();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference">GoogleContactCenterInsightsQaQuestionMetricsOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `predefinedQuestionConfig`<sup>Required</sup> <a name="predefinedQuestionConfig" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.predefinedQuestionConfig"></a>

```java
public GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference getPredefinedQuestionConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference">GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference</a>

---

##### `qaQuestionDataOptions`<sup>Required</sup> <a name="qaQuestionDataOptions" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.qaQuestionDataOptions"></a>

```java
public GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference getQaQuestionDataOptions();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference">GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.timeouts"></a>

```java
public GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference">GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference</a>

---

##### `tuningMetadata`<sup>Required</sup> <a name="tuningMetadata" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.tuningMetadata"></a>

```java
public GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference getTuningMetadata();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference">GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `abbreviationInput`<sup>Optional</sup> <a name="abbreviationInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.abbreviationInput"></a>

```java
public java.lang.String getAbbreviationInput();
```

- *Type:* java.lang.String

---

##### `answerChoicesInput`<sup>Optional</sup> <a name="answerChoicesInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.answerChoicesInput"></a>

```java
public IResolvable|java.util.List<GoogleContactCenterInsightsQaQuestionAnswerChoices> getAnswerChoicesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoices">GoogleContactCenterInsightsQaQuestionAnswerChoices</a>>

---

##### `answerInstructionsInput`<sup>Optional</sup> <a name="answerInstructionsInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.answerInstructionsInput"></a>

```java
public java.lang.String getAnswerInstructionsInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `metricsInput`<sup>Optional</sup> <a name="metricsInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.metricsInput"></a>

```java
public GoogleContactCenterInsightsQaQuestionMetrics getMetricsInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetrics">GoogleContactCenterInsightsQaQuestionMetrics</a>

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.orderInput"></a>

```java
public java.lang.Number getOrderInput();
```

- *Type:* java.lang.Number

---

##### `predefinedQuestionConfigInput`<sup>Optional</sup> <a name="predefinedQuestionConfigInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.predefinedQuestionConfigInput"></a>

```java
public GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig getPredefinedQuestionConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig">GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `qaQuestionDataOptionsInput`<sup>Optional</sup> <a name="qaQuestionDataOptionsInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.qaQuestionDataOptionsInput"></a>

```java
public GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions getQaQuestionDataOptionsInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions">GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions</a>

---

##### `qaScorecardInput`<sup>Optional</sup> <a name="qaScorecardInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.qaScorecardInput"></a>

```java
public java.lang.String getQaScorecardInput();
```

- *Type:* java.lang.String

---

##### `questionBodyInput`<sup>Optional</sup> <a name="questionBodyInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.questionBodyInput"></a>

```java
public java.lang.String getQuestionBodyInput();
```

- *Type:* java.lang.String

---

##### `questionTypeInput`<sup>Optional</sup> <a name="questionTypeInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.questionTypeInput"></a>

```java
public java.lang.String getQuestionTypeInput();
```

- *Type:* java.lang.String

---

##### `revisionInput`<sup>Optional</sup> <a name="revisionInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.revisionInput"></a>

```java
public java.lang.String getRevisionInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.timeoutsInput"></a>

```java
public IResolvable|GoogleContactCenterInsightsQaQuestionTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeouts">GoogleContactCenterInsightsQaQuestionTimeouts</a>

---

##### `tuningMetadataInput`<sup>Optional</sup> <a name="tuningMetadataInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.tuningMetadataInput"></a>

```java
public GoogleContactCenterInsightsQaQuestionTuningMetadata getTuningMetadataInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadata">GoogleContactCenterInsightsQaQuestionTuningMetadata</a>

---

##### `abbreviation`<sup>Required</sup> <a name="abbreviation" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.abbreviation"></a>

```java
public java.lang.String getAbbreviation();
```

- *Type:* java.lang.String

---

##### `answerInstructions`<sup>Required</sup> <a name="answerInstructions" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.answerInstructions"></a>

```java
public java.lang.String getAnswerInstructions();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.order"></a>

```java
public java.lang.Number getOrder();
```

- *Type:* java.lang.Number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `qaScorecard`<sup>Required</sup> <a name="qaScorecard" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.qaScorecard"></a>

```java
public java.lang.String getQaScorecard();
```

- *Type:* java.lang.String

---

##### `questionBody`<sup>Required</sup> <a name="questionBody" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.questionBody"></a>

```java
public java.lang.String getQuestionBody();
```

- *Type:* java.lang.String

---

##### `questionType`<sup>Required</sup> <a name="questionType" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.questionType"></a>

```java
public java.lang.String getQuestionType();
```

- *Type:* java.lang.String

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.revision"></a>

```java
public java.lang.String getRevision();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleContactCenterInsightsQaQuestionAnswerChoices <a name="GoogleContactCenterInsightsQaQuestionAnswerChoices" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoices"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoices.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_contact_center_insights_qa_question.GoogleContactCenterInsightsQaQuestionAnswerChoices;

GoogleContactCenterInsightsQaQuestionAnswerChoices.builder()
//  .boolValue(java.lang.Boolean|IResolvable)
//  .key(java.lang.String)
//  .naValue(java.lang.Boolean|IResolvable)
//  .numValue(java.lang.Number)
//  .score(java.lang.Number)
//  .strValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoices.property.boolValue">boolValue</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Boolean value. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoices.property.key">key</a></code> | <code>java.lang.String</code> | A short string used as an identifier. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoices.property.naValue">naValue</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A value of "Not Applicable (N/A)". |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoices.property.numValue">numValue</a></code> | <code>java.lang.Number</code> | Numerical value. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoices.property.score">score</a></code> | <code>java.lang.Number</code> | Numerical score of the answer, used for generating the overall score of a QaScorecardResult. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoices.property.strValue">strValue</a></code> | <code>java.lang.String</code> | String value. |

---

##### `boolValue`<sup>Optional</sup> <a name="boolValue" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoices.property.boolValue"></a>

```java
public java.lang.Boolean|IResolvable getBoolValue();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Boolean value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_qa_question#bool_value GoogleContactCenterInsightsQaQuestion#bool_value}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoices.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

A short string used as an identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_qa_question#key GoogleContactCenterInsightsQaQuestion#key}

---

##### `naValue`<sup>Optional</sup> <a name="naValue" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoices.property.naValue"></a>

```java
public java.lang.Boolean|IResolvable getNaValue();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A value of "Not Applicable (N/A)".

If provided, this field may only
be set to 'true'. If a question receives this answer, it will be
excluded from any score calculations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_qa_question#na_value GoogleContactCenterInsightsQaQuestion#na_value}

---

##### `numValue`<sup>Optional</sup> <a name="numValue" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoices.property.numValue"></a>

```java
public java.lang.Number getNumValue();
```

- *Type:* java.lang.Number

Numerical value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_qa_question#num_value GoogleContactCenterInsightsQaQuestion#num_value}

---

##### `score`<sup>Optional</sup> <a name="score" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoices.property.score"></a>

```java
public java.lang.Number getScore();
```

- *Type:* java.lang.Number

Numerical score of the answer, used for generating the overall score of a QaScorecardResult.

If the answer uses na_value, this field is unused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_qa_question#score GoogleContactCenterInsightsQaQuestion#score}

---

##### `strValue`<sup>Optional</sup> <a name="strValue" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoices.property.strValue"></a>

```java
public java.lang.String getStrValue();
```

- *Type:* java.lang.String

String value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_qa_question#str_value GoogleContactCenterInsightsQaQuestion#str_value}

---

### GoogleContactCenterInsightsQaQuestionConfig <a name="GoogleContactCenterInsightsQaQuestionConfig" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_contact_center_insights_qa_question.GoogleContactCenterInsightsQaQuestionConfig;

GoogleContactCenterInsightsQaQuestionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .qaScorecard(java.lang.String)
    .revision(java.lang.String)
//  .abbreviation(java.lang.String)
//  .answerChoices(IResolvable|java.util.List<GoogleContactCenterInsightsQaQuestionAnswerChoices>)
//  .answerInstructions(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .metrics(GoogleContactCenterInsightsQaQuestionMetrics)
//  .order(java.lang.Number)
//  .predefinedQuestionConfig(GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig)
//  .project(java.lang.String)
//  .qaQuestionDataOptions(GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions)
//  .questionBody(java.lang.String)
//  .questionType(java.lang.String)
//  .tags(java.util.List<java.lang.String>)
//  .timeouts(GoogleContactCenterInsightsQaQuestionTimeouts)
//  .tuningMetadata(GoogleContactCenterInsightsQaQuestionTuningMetadata)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.qaScorecard">qaScorecard</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.revision">revision</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.abbreviation">abbreviation</a></code> | <code>java.lang.String</code> | Short, descriptive string, used in the UI where it's not practical to display the full question body. E.g., "Greeting". |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.answerChoices">answerChoices</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoices">GoogleContactCenterInsightsQaQuestionAnswerChoices</a>></code> | answer_choices block. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.answerInstructions">answerInstructions</a></code> | <code>java.lang.String</code> | Instructions describing how to determine the answer. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_qa_question#id GoogleContactCenterInsightsQaQuestion#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.metrics">metrics</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetrics">GoogleContactCenterInsightsQaQuestionMetrics</a></code> | metrics block. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.order">order</a></code> | <code>java.lang.Number</code> | Defines the order of the question within its parent scorecard revision. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.predefinedQuestionConfig">predefinedQuestionConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig">GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig</a></code> | predefined_question_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_qa_question#project GoogleContactCenterInsightsQaQuestion#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.qaQuestionDataOptions">qaQuestionDataOptions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions">GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions</a></code> | qa_question_data_options block. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.questionBody">questionBody</a></code> | <code>java.lang.String</code> | Question text. E.g., "Did the agent greet the customer?". |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.questionType">questionType</a></code> | <code>java.lang.String</code> | The type of question. Possible values: CUSTOMIZABLE PREDEFINED. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Questions are tagged for categorization and scoring. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeouts">GoogleContactCenterInsightsQaQuestionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.tuningMetadata">tuningMetadata</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadata">GoogleContactCenterInsightsQaQuestionTuningMetadata</a></code> | tuning_metadata block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_qa_question#location GoogleContactCenterInsightsQaQuestion#location}

---

##### `qaScorecard`<sup>Required</sup> <a name="qaScorecard" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.qaScorecard"></a>

```java
public java.lang.String getQaScorecard();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_qa_question#qa_scorecard GoogleContactCenterInsightsQaQuestion#qa_scorecard}

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.revision"></a>

```java
public java.lang.String getRevision();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_qa_question#revision GoogleContactCenterInsightsQaQuestion#revision}

---

##### `abbreviation`<sup>Optional</sup> <a name="abbreviation" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.abbreviation"></a>

```java
public java.lang.String getAbbreviation();
```

- *Type:* java.lang.String

Short, descriptive string, used in the UI where it's not practical to display the full question body. E.g., "Greeting".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_qa_question#abbreviation GoogleContactCenterInsightsQaQuestion#abbreviation}

---

##### `answerChoices`<sup>Optional</sup> <a name="answerChoices" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.answerChoices"></a>

```java
public IResolvable|java.util.List<GoogleContactCenterInsightsQaQuestionAnswerChoices> getAnswerChoices();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoices">GoogleContactCenterInsightsQaQuestionAnswerChoices</a>>

answer_choices block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_qa_question#answer_choices GoogleContactCenterInsightsQaQuestion#answer_choices}

---

##### `answerInstructions`<sup>Optional</sup> <a name="answerInstructions" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.answerInstructions"></a>

```java
public java.lang.String getAnswerInstructions();
```

- *Type:* java.lang.String

Instructions describing how to determine the answer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_qa_question#answer_instructions GoogleContactCenterInsightsQaQuestion#answer_instructions}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_qa_question#deletion_policy GoogleContactCenterInsightsQaQuestion#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_qa_question#id GoogleContactCenterInsightsQaQuestion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metrics`<sup>Optional</sup> <a name="metrics" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.metrics"></a>

```java
public GoogleContactCenterInsightsQaQuestionMetrics getMetrics();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetrics">GoogleContactCenterInsightsQaQuestionMetrics</a>

metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_qa_question#metrics GoogleContactCenterInsightsQaQuestion#metrics}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.order"></a>

```java
public java.lang.Number getOrder();
```

- *Type:* java.lang.Number

Defines the order of the question within its parent scorecard revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_qa_question#order GoogleContactCenterInsightsQaQuestion#order}

---

##### `predefinedQuestionConfig`<sup>Optional</sup> <a name="predefinedQuestionConfig" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.predefinedQuestionConfig"></a>

```java
public GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig getPredefinedQuestionConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig">GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig</a>

predefined_question_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_qa_question#predefined_question_config GoogleContactCenterInsightsQaQuestion#predefined_question_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_qa_question#project GoogleContactCenterInsightsQaQuestion#project}.

---

##### `qaQuestionDataOptions`<sup>Optional</sup> <a name="qaQuestionDataOptions" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.qaQuestionDataOptions"></a>

```java
public GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions getQaQuestionDataOptions();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions">GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions</a>

qa_question_data_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_qa_question#qa_question_data_options GoogleContactCenterInsightsQaQuestion#qa_question_data_options}

---

##### `questionBody`<sup>Optional</sup> <a name="questionBody" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.questionBody"></a>

```java
public java.lang.String getQuestionBody();
```

- *Type:* java.lang.String

Question text. E.g., "Did the agent greet the customer?".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_qa_question#question_body GoogleContactCenterInsightsQaQuestion#question_body}

---

##### `questionType`<sup>Optional</sup> <a name="questionType" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.questionType"></a>

```java
public java.lang.String getQuestionType();
```

- *Type:* java.lang.String

The type of question. Possible values: CUSTOMIZABLE PREDEFINED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_qa_question#question_type GoogleContactCenterInsightsQaQuestion#question_type}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

Questions are tagged for categorization and scoring.

Tags can either be:

* Default Tags: These are predefined categories. They are identified by
  their string value (e.g., "BUSINESS", "COMPLIANCE", and "CUSTOMER").
* Custom Tags: These are user-defined categories. They are identified by
  their full resource name (e.g.,
  projects/{project}/locations/{location}/qaQuestionTags/{qa_question_tag}).
  Both default and custom tags are used to group questions and to influence
  the scoring of each question.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_qa_question#tags GoogleContactCenterInsightsQaQuestion#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.timeouts"></a>

```java
public GoogleContactCenterInsightsQaQuestionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeouts">GoogleContactCenterInsightsQaQuestionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_qa_question#timeouts GoogleContactCenterInsightsQaQuestion#timeouts}

---

##### `tuningMetadata`<sup>Optional</sup> <a name="tuningMetadata" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.tuningMetadata"></a>

```java
public GoogleContactCenterInsightsQaQuestionTuningMetadata getTuningMetadata();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadata">GoogleContactCenterInsightsQaQuestionTuningMetadata</a>

tuning_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_qa_question#tuning_metadata GoogleContactCenterInsightsQaQuestion#tuning_metadata}

---

### GoogleContactCenterInsightsQaQuestionMetrics <a name="GoogleContactCenterInsightsQaQuestionMetrics" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetrics.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_contact_center_insights_qa_question.GoogleContactCenterInsightsQaQuestionMetrics;

GoogleContactCenterInsightsQaQuestionMetrics.builder()
    .build();
```


### GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig <a name="GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_contact_center_insights_qa_question.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig;

GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig.builder()
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig.property.type">type</a></code> | <code>java.lang.String</code> | The type of the predefined question. Possible values: CONVERSATION_OUTCOME CONVERSATION_OUTCOME_ESCALATION_INITIATOR_ROLE. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of the predefined question. Possible values: CONVERSATION_OUTCOME CONVERSATION_OUTCOME_ESCALATION_INITIATOR_ROLE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_qa_question#type GoogleContactCenterInsightsQaQuestion#type}

---

### GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions <a name="GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_contact_center_insights_qa_question.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions;

GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions.builder()
//  .conversationDataOptions(GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions.property.conversationDataOptions">conversationDataOptions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions">GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions</a></code> | conversation_data_options block. |

---

##### `conversationDataOptions`<sup>Optional</sup> <a name="conversationDataOptions" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions.property.conversationDataOptions"></a>

```java
public GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions getConversationDataOptions();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions">GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions</a>

conversation_data_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_qa_question#conversation_data_options GoogleContactCenterInsightsQaQuestion#conversation_data_options}

---

### GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions <a name="GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_contact_center_insights_qa_question.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions;

GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions.builder()
//  .includeDialogflowInteractionData(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions.property.includeDialogflowInteractionData">includeDialogflowInteractionData</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to include the per turn Dialogflow interaction data in conversation transcript. |

---

##### `includeDialogflowInteractionData`<sup>Optional</sup> <a name="includeDialogflowInteractionData" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions.property.includeDialogflowInteractionData"></a>

```java
public java.lang.Boolean|IResolvable getIncludeDialogflowInteractionData();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to include the per turn Dialogflow interaction data in conversation transcript.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_qa_question#include_dialogflow_interaction_data GoogleContactCenterInsightsQaQuestion#include_dialogflow_interaction_data}

---

### GoogleContactCenterInsightsQaQuestionTimeouts <a name="GoogleContactCenterInsightsQaQuestionTimeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_contact_center_insights_qa_question.GoogleContactCenterInsightsQaQuestionTimeouts;

GoogleContactCenterInsightsQaQuestionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_qa_question#create GoogleContactCenterInsightsQaQuestion#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_qa_question#delete GoogleContactCenterInsightsQaQuestion#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_qa_question#update GoogleContactCenterInsightsQaQuestion#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_qa_question#create GoogleContactCenterInsightsQaQuestion#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_qa_question#delete GoogleContactCenterInsightsQaQuestion#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_qa_question#update GoogleContactCenterInsightsQaQuestion#update}.

---

### GoogleContactCenterInsightsQaQuestionTuningMetadata <a name="GoogleContactCenterInsightsQaQuestionTuningMetadata" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadata.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_contact_center_insights_qa_question.GoogleContactCenterInsightsQaQuestionTuningMetadata;

GoogleContactCenterInsightsQaQuestionTuningMetadata.builder()
//  .datasetValidationWarnings(java.util.List<java.lang.String>)
//  .totalValidLabelCount(java.lang.String)
//  .tuningError(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadata.property.datasetValidationWarnings">datasetValidationWarnings</a></code> | <code>java.util.List<java.lang.String></code> | A list of any applicable data validation warnings about the question's feedback labels. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadata.property.totalValidLabelCount">totalValidLabelCount</a></code> | <code>java.lang.String</code> | Total number of valid labels provided for the question at the time of tuining. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadata.property.tuningError">tuningError</a></code> | <code>java.lang.String</code> | Error status of the tuning operation for the question. Will only be set if the tuning operation failed. |

---

##### `datasetValidationWarnings`<sup>Optional</sup> <a name="datasetValidationWarnings" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadata.property.datasetValidationWarnings"></a>

```java
public java.util.List<java.lang.String> getDatasetValidationWarnings();
```

- *Type:* java.util.List<java.lang.String>

A list of any applicable data validation warnings about the question's feedback labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_qa_question#dataset_validation_warnings GoogleContactCenterInsightsQaQuestion#dataset_validation_warnings}

---

##### `totalValidLabelCount`<sup>Optional</sup> <a name="totalValidLabelCount" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadata.property.totalValidLabelCount"></a>

```java
public java.lang.String getTotalValidLabelCount();
```

- *Type:* java.lang.String

Total number of valid labels provided for the question at the time of tuining.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_qa_question#total_valid_label_count GoogleContactCenterInsightsQaQuestion#total_valid_label_count}

---

##### `tuningError`<sup>Optional</sup> <a name="tuningError" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadata.property.tuningError"></a>

```java
public java.lang.String getTuningError();
```

- *Type:* java.lang.String

Error status of the tuning operation for the question. Will only be set if the tuning operation failed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_qa_question#tuning_error GoogleContactCenterInsightsQaQuestion#tuning_error}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleContactCenterInsightsQaQuestionAnswerChoicesList <a name="GoogleContactCenterInsightsQaQuestionAnswerChoicesList" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_contact_center_insights_qa_question.GoogleContactCenterInsightsQaQuestionAnswerChoicesList;

new GoogleContactCenterInsightsQaQuestionAnswerChoicesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.get"></a>

```java
public GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoices">GoogleContactCenterInsightsQaQuestionAnswerChoices</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleContactCenterInsightsQaQuestionAnswerChoices> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoices">GoogleContactCenterInsightsQaQuestionAnswerChoices</a>>

---


### GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference <a name="GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_contact_center_insights_qa_question.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference;

new GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetBoolValue">resetBoolValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetNaValue">resetNaValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetNumValue">resetNumValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetScore">resetScore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetStrValue">resetStrValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBoolValue` <a name="resetBoolValue" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetBoolValue"></a>

```java
public void resetBoolValue()
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetNaValue` <a name="resetNaValue" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetNaValue"></a>

```java
public void resetNaValue()
```

##### `resetNumValue` <a name="resetNumValue" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetNumValue"></a>

```java
public void resetNumValue()
```

##### `resetScore` <a name="resetScore" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetScore"></a>

```java
public void resetScore()
```

##### `resetStrValue` <a name="resetStrValue" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetStrValue"></a>

```java
public void resetStrValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.boolValueInput">boolValueInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.naValueInput">naValueInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.numValueInput">numValueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.scoreInput">scoreInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.strValueInput">strValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.boolValue">boolValue</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.naValue">naValue</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.numValue">numValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.score">score</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.strValue">strValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoices">GoogleContactCenterInsightsQaQuestionAnswerChoices</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `boolValueInput`<sup>Optional</sup> <a name="boolValueInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.boolValueInput"></a>

```java
public java.lang.Boolean|IResolvable getBoolValueInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `naValueInput`<sup>Optional</sup> <a name="naValueInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.naValueInput"></a>

```java
public java.lang.Boolean|IResolvable getNaValueInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `numValueInput`<sup>Optional</sup> <a name="numValueInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.numValueInput"></a>

```java
public java.lang.Number getNumValueInput();
```

- *Type:* java.lang.Number

---

##### `scoreInput`<sup>Optional</sup> <a name="scoreInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.scoreInput"></a>

```java
public java.lang.Number getScoreInput();
```

- *Type:* java.lang.Number

---

##### `strValueInput`<sup>Optional</sup> <a name="strValueInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.strValueInput"></a>

```java
public java.lang.String getStrValueInput();
```

- *Type:* java.lang.String

---

##### `boolValue`<sup>Required</sup> <a name="boolValue" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.boolValue"></a>

```java
public java.lang.Boolean|IResolvable getBoolValue();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `naValue`<sup>Required</sup> <a name="naValue" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.naValue"></a>

```java
public java.lang.Boolean|IResolvable getNaValue();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `numValue`<sup>Required</sup> <a name="numValue" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.numValue"></a>

```java
public java.lang.Number getNumValue();
```

- *Type:* java.lang.Number

---

##### `score`<sup>Required</sup> <a name="score" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.score"></a>

```java
public java.lang.Number getScore();
```

- *Type:* java.lang.Number

---

##### `strValue`<sup>Required</sup> <a name="strValue" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.strValue"></a>

```java
public java.lang.String getStrValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleContactCenterInsightsQaQuestionAnswerChoices getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoices">GoogleContactCenterInsightsQaQuestionAnswerChoices</a>

---


### GoogleContactCenterInsightsQaQuestionMetricsOutputReference <a name="GoogleContactCenterInsightsQaQuestionMetricsOutputReference" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_contact_center_insights_qa_question.GoogleContactCenterInsightsQaQuestionMetricsOutputReference;

new GoogleContactCenterInsightsQaQuestionMetricsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.property.accuracy">accuracy</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetrics">GoogleContactCenterInsightsQaQuestionMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accuracy`<sup>Required</sup> <a name="accuracy" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.property.accuracy"></a>

```java
public java.lang.Number getAccuracy();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.property.internalValue"></a>

```java
public GoogleContactCenterInsightsQaQuestionMetrics getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetrics">GoogleContactCenterInsightsQaQuestionMetrics</a>

---


### GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference <a name="GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_contact_center_insights_qa_question.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference;

new GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig">GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.property.internalValue"></a>

```java
public GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig">GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig</a>

---


### GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference <a name="GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_contact_center_insights_qa_question.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference;

new GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.resetIncludeDialogflowInteractionData">resetIncludeDialogflowInteractionData</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludeDialogflowInteractionData` <a name="resetIncludeDialogflowInteractionData" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.resetIncludeDialogflowInteractionData"></a>

```java
public void resetIncludeDialogflowInteractionData()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.property.includeDialogflowInteractionDataInput">includeDialogflowInteractionDataInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.property.includeDialogflowInteractionData">includeDialogflowInteractionData</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions">GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `includeDialogflowInteractionDataInput`<sup>Optional</sup> <a name="includeDialogflowInteractionDataInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.property.includeDialogflowInteractionDataInput"></a>

```java
public java.lang.Boolean|IResolvable getIncludeDialogflowInteractionDataInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `includeDialogflowInteractionData`<sup>Required</sup> <a name="includeDialogflowInteractionData" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.property.includeDialogflowInteractionData"></a>

```java
public java.lang.Boolean|IResolvable getIncludeDialogflowInteractionData();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.property.internalValue"></a>

```java
public GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions">GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions</a>

---


### GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference <a name="GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_contact_center_insights_qa_question.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference;

new GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.putConversationDataOptions">putConversationDataOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.resetConversationDataOptions">resetConversationDataOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConversationDataOptions` <a name="putConversationDataOptions" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.putConversationDataOptions"></a>

```java
public void putConversationDataOptions(GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.putConversationDataOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions">GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions</a>

---

##### `resetConversationDataOptions` <a name="resetConversationDataOptions" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.resetConversationDataOptions"></a>

```java
public void resetConversationDataOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.property.conversationDataOptions">conversationDataOptions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference">GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.property.conversationDataOptionsInput">conversationDataOptionsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions">GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions">GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `conversationDataOptions`<sup>Required</sup> <a name="conversationDataOptions" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.property.conversationDataOptions"></a>

```java
public GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference getConversationDataOptions();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference">GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference</a>

---

##### `conversationDataOptionsInput`<sup>Optional</sup> <a name="conversationDataOptionsInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.property.conversationDataOptionsInput"></a>

```java
public GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions getConversationDataOptionsInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions">GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.property.internalValue"></a>

```java
public GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions">GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions</a>

---


### GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference <a name="GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_contact_center_insights_qa_question.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference;

new GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeouts">GoogleContactCenterInsightsQaQuestionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleContactCenterInsightsQaQuestionTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeouts">GoogleContactCenterInsightsQaQuestionTimeouts</a>

---


### GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference <a name="GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_contact_center_insights_qa_question.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference;

new GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.resetDatasetValidationWarnings">resetDatasetValidationWarnings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.resetTotalValidLabelCount">resetTotalValidLabelCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.resetTuningError">resetTuningError</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDatasetValidationWarnings` <a name="resetDatasetValidationWarnings" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.resetDatasetValidationWarnings"></a>

```java
public void resetDatasetValidationWarnings()
```

##### `resetTotalValidLabelCount` <a name="resetTotalValidLabelCount" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.resetTotalValidLabelCount"></a>

```java
public void resetTotalValidLabelCount()
```

##### `resetTuningError` <a name="resetTuningError" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.resetTuningError"></a>

```java
public void resetTuningError()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.datasetValidationWarningsInput">datasetValidationWarningsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.totalValidLabelCountInput">totalValidLabelCountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.tuningErrorInput">tuningErrorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.datasetValidationWarnings">datasetValidationWarnings</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.totalValidLabelCount">totalValidLabelCount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.tuningError">tuningError</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadata">GoogleContactCenterInsightsQaQuestionTuningMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `datasetValidationWarningsInput`<sup>Optional</sup> <a name="datasetValidationWarningsInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.datasetValidationWarningsInput"></a>

```java
public java.util.List<java.lang.String> getDatasetValidationWarningsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `totalValidLabelCountInput`<sup>Optional</sup> <a name="totalValidLabelCountInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.totalValidLabelCountInput"></a>

```java
public java.lang.String getTotalValidLabelCountInput();
```

- *Type:* java.lang.String

---

##### `tuningErrorInput`<sup>Optional</sup> <a name="tuningErrorInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.tuningErrorInput"></a>

```java
public java.lang.String getTuningErrorInput();
```

- *Type:* java.lang.String

---

##### `datasetValidationWarnings`<sup>Required</sup> <a name="datasetValidationWarnings" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.datasetValidationWarnings"></a>

```java
public java.util.List<java.lang.String> getDatasetValidationWarnings();
```

- *Type:* java.util.List<java.lang.String>

---

##### `totalValidLabelCount`<sup>Required</sup> <a name="totalValidLabelCount" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.totalValidLabelCount"></a>

```java
public java.lang.String getTotalValidLabelCount();
```

- *Type:* java.lang.String

---

##### `tuningError`<sup>Required</sup> <a name="tuningError" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.tuningError"></a>

```java
public java.lang.String getTuningError();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.internalValue"></a>

```java
public GoogleContactCenterInsightsQaQuestionTuningMetadata getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadata">GoogleContactCenterInsightsQaQuestionTuningMetadata</a>

---



