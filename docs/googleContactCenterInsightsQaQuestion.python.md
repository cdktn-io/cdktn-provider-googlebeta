# `googleContactCenterInsightsQaQuestion` Submodule <a name="`googleContactCenterInsightsQaQuestion` Submodule" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleContactCenterInsightsQaQuestion <a name="GoogleContactCenterInsightsQaQuestion" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_contact_center_insights_qa_question google_contact_center_insights_qa_question}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer"></a>

```python
from cdktn_provider_google_beta import google_contact_center_insights_qa_question

googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  qa_scorecard: str,
  revision: str,
  abbreviation: str = None,
  answer_choices: IResolvable | typing.List[GoogleContactCenterInsightsQaQuestionAnswerChoices] = None,
  answer_instructions: str = None,
  deletion_policy: str = None,
  id: str = None,
  metrics: GoogleContactCenterInsightsQaQuestionMetrics = None,
  order: typing.Union[int, float] = None,
  predefined_question_config: GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig = None,
  project: str = None,
  qa_question_data_options: GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions = None,
  question_body: str = None,
  question_type: str = None,
  tags: typing.List[str] = None,
  timeouts: GoogleContactCenterInsightsQaQuestionTimeouts = None,
  tuning_metadata: GoogleContactCenterInsightsQaQuestionTuningMetadata = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.qaScorecard">qa_scorecard</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.revision">revision</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.abbreviation">abbreviation</a></code> | <code>str</code> | Short, descriptive string, used in the UI where it's not practical to display the full question body. E.g., "Greeting". |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.answerChoices">answer_choices</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoices">GoogleContactCenterInsightsQaQuestionAnswerChoices</a>]</code> | answer_choices block. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.answerInstructions">answer_instructions</a></code> | <code>str</code> | Instructions describing how to determine the answer. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_contact_center_insights_qa_question#id GoogleContactCenterInsightsQaQuestion#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.metrics">metrics</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetrics">GoogleContactCenterInsightsQaQuestionMetrics</a></code> | metrics block. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.order">order</a></code> | <code>typing.Union[int, float]</code> | Defines the order of the question within its parent scorecard revision. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.predefinedQuestionConfig">predefined_question_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig">GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig</a></code> | predefined_question_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_contact_center_insights_qa_question#project GoogleContactCenterInsightsQaQuestion#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.qaQuestionDataOptions">qa_question_data_options</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions">GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions</a></code> | qa_question_data_options block. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.questionBody">question_body</a></code> | <code>str</code> | Question text. E.g., "Did the agent greet the customer?". |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.questionType">question_type</a></code> | <code>str</code> | The type of question. Possible values: CUSTOMIZABLE PREDEFINED. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | Questions are tagged for categorization and scoring. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeouts">GoogleContactCenterInsightsQaQuestionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.tuningMetadata">tuning_metadata</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadata">GoogleContactCenterInsightsQaQuestionTuningMetadata</a></code> | tuning_metadata block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_contact_center_insights_qa_question#location GoogleContactCenterInsightsQaQuestion#location}

---

##### `qa_scorecard`<sup>Required</sup> <a name="qa_scorecard" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.qaScorecard"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_contact_center_insights_qa_question#qa_scorecard GoogleContactCenterInsightsQaQuestion#qa_scorecard}

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.revision"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_contact_center_insights_qa_question#revision GoogleContactCenterInsightsQaQuestion#revision}

---

##### `abbreviation`<sup>Optional</sup> <a name="abbreviation" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.abbreviation"></a>

- *Type:* str

Short, descriptive string, used in the UI where it's not practical to display the full question body. E.g., "Greeting".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_contact_center_insights_qa_question#abbreviation GoogleContactCenterInsightsQaQuestion#abbreviation}

---

##### `answer_choices`<sup>Optional</sup> <a name="answer_choices" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.answerChoices"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoices">GoogleContactCenterInsightsQaQuestionAnswerChoices</a>]

answer_choices block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_contact_center_insights_qa_question#answer_choices GoogleContactCenterInsightsQaQuestion#answer_choices}

---

##### `answer_instructions`<sup>Optional</sup> <a name="answer_instructions" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.answerInstructions"></a>

- *Type:* str

Instructions describing how to determine the answer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_contact_center_insights_qa_question#answer_instructions GoogleContactCenterInsightsQaQuestion#answer_instructions}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_contact_center_insights_qa_question#deletion_policy GoogleContactCenterInsightsQaQuestion#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_contact_center_insights_qa_question#id GoogleContactCenterInsightsQaQuestion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metrics`<sup>Optional</sup> <a name="metrics" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.metrics"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetrics">GoogleContactCenterInsightsQaQuestionMetrics</a>

metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_contact_center_insights_qa_question#metrics GoogleContactCenterInsightsQaQuestion#metrics}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.order"></a>

- *Type:* typing.Union[int, float]

Defines the order of the question within its parent scorecard revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_contact_center_insights_qa_question#order GoogleContactCenterInsightsQaQuestion#order}

---

##### `predefined_question_config`<sup>Optional</sup> <a name="predefined_question_config" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.predefinedQuestionConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig">GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig</a>

predefined_question_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_contact_center_insights_qa_question#predefined_question_config GoogleContactCenterInsightsQaQuestion#predefined_question_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_contact_center_insights_qa_question#project GoogleContactCenterInsightsQaQuestion#project}.

---

##### `qa_question_data_options`<sup>Optional</sup> <a name="qa_question_data_options" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.qaQuestionDataOptions"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions">GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions</a>

qa_question_data_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_contact_center_insights_qa_question#qa_question_data_options GoogleContactCenterInsightsQaQuestion#qa_question_data_options}

---

##### `question_body`<sup>Optional</sup> <a name="question_body" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.questionBody"></a>

- *Type:* str

Question text. E.g., "Did the agent greet the customer?".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_contact_center_insights_qa_question#question_body GoogleContactCenterInsightsQaQuestion#question_body}

---

##### `question_type`<sup>Optional</sup> <a name="question_type" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.questionType"></a>

- *Type:* str

The type of question. Possible values: CUSTOMIZABLE PREDEFINED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_contact_center_insights_qa_question#question_type GoogleContactCenterInsightsQaQuestion#question_type}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

Questions are tagged for categorization and scoring.

Tags can either be:

* Default Tags: These are predefined categories. They are identified by
  their string value (e.g., "BUSINESS", "COMPLIANCE", and "CUSTOMER").
* Custom Tags: These are user-defined categories. They are identified by
  their full resource name (e.g.,
  projects/{project}/locations/{location}/qaQuestionTags/{qa_question_tag}).
  Both default and custom tags are used to group questions and to influence
  the scoring of each question.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_contact_center_insights_qa_question#tags GoogleContactCenterInsightsQaQuestion#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeouts">GoogleContactCenterInsightsQaQuestionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_contact_center_insights_qa_question#timeouts GoogleContactCenterInsightsQaQuestion#timeouts}

---

##### `tuning_metadata`<sup>Optional</sup> <a name="tuning_metadata" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.Initializer.parameter.tuningMetadata"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadata">GoogleContactCenterInsightsQaQuestionTuningMetadata</a>

tuning_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_contact_center_insights_qa_question#tuning_metadata GoogleContactCenterInsightsQaQuestion#tuning_metadata}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.putAnswerChoices">put_answer_choices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.putMetrics">put_metrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.putPredefinedQuestionConfig">put_predefined_question_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.putQaQuestionDataOptions">put_qa_question_data_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.putTuningMetadata">put_tuning_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetAbbreviation">reset_abbreviation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetAnswerChoices">reset_answer_choices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetAnswerInstructions">reset_answer_instructions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetMetrics">reset_metrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetOrder">reset_order</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetPredefinedQuestionConfig">reset_predefined_question_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetQaQuestionDataOptions">reset_qa_question_data_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetQuestionBody">reset_question_body</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetQuestionType">reset_question_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetTuningMetadata">reset_tuning_metadata</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_answer_choices` <a name="put_answer_choices" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.putAnswerChoices"></a>

```python
def put_answer_choices(
  value: IResolvable | typing.List[GoogleContactCenterInsightsQaQuestionAnswerChoices]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.putAnswerChoices.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoices">GoogleContactCenterInsightsQaQuestionAnswerChoices</a>]

---

##### `put_metrics` <a name="put_metrics" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.putMetrics"></a>

```python
def put_metrics() -> None
```

##### `put_predefined_question_config` <a name="put_predefined_question_config" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.putPredefinedQuestionConfig"></a>

```python
def put_predefined_question_config(
  type: str = None
) -> None
```

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.putPredefinedQuestionConfig.parameter.type"></a>

- *Type:* str

The type of the predefined question. Possible values: CONVERSATION_OUTCOME CONVERSATION_OUTCOME_ESCALATION_INITIATOR_ROLE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_contact_center_insights_qa_question#type GoogleContactCenterInsightsQaQuestion#type}

---

##### `put_qa_question_data_options` <a name="put_qa_question_data_options" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.putQaQuestionDataOptions"></a>

```python
def put_qa_question_data_options(
  conversation_data_options: GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions = None
) -> None
```

###### `conversation_data_options`<sup>Optional</sup> <a name="conversation_data_options" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.putQaQuestionDataOptions.parameter.conversationDataOptions"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions">GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions</a>

conversation_data_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_contact_center_insights_qa_question#conversation_data_options GoogleContactCenterInsightsQaQuestion#conversation_data_options}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_contact_center_insights_qa_question#create GoogleContactCenterInsightsQaQuestion#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_contact_center_insights_qa_question#delete GoogleContactCenterInsightsQaQuestion#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_contact_center_insights_qa_question#update GoogleContactCenterInsightsQaQuestion#update}.

---

##### `put_tuning_metadata` <a name="put_tuning_metadata" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.putTuningMetadata"></a>

```python
def put_tuning_metadata(
  dataset_validation_warnings: typing.List[str] = None,
  total_valid_label_count: str = None,
  tuning_error: str = None
) -> None
```

###### `dataset_validation_warnings`<sup>Optional</sup> <a name="dataset_validation_warnings" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.putTuningMetadata.parameter.datasetValidationWarnings"></a>

- *Type:* typing.List[str]

A list of any applicable data validation warnings about the question's feedback labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_contact_center_insights_qa_question#dataset_validation_warnings GoogleContactCenterInsightsQaQuestion#dataset_validation_warnings}

---

###### `total_valid_label_count`<sup>Optional</sup> <a name="total_valid_label_count" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.putTuningMetadata.parameter.totalValidLabelCount"></a>

- *Type:* str

Total number of valid labels provided for the question at the time of tuining.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_contact_center_insights_qa_question#total_valid_label_count GoogleContactCenterInsightsQaQuestion#total_valid_label_count}

---

###### `tuning_error`<sup>Optional</sup> <a name="tuning_error" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.putTuningMetadata.parameter.tuningError"></a>

- *Type:* str

Error status of the tuning operation for the question. Will only be set if the tuning operation failed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_contact_center_insights_qa_question#tuning_error GoogleContactCenterInsightsQaQuestion#tuning_error}

---

##### `reset_abbreviation` <a name="reset_abbreviation" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetAbbreviation"></a>

```python
def reset_abbreviation() -> None
```

##### `reset_answer_choices` <a name="reset_answer_choices" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetAnswerChoices"></a>

```python
def reset_answer_choices() -> None
```

##### `reset_answer_instructions` <a name="reset_answer_instructions" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetAnswerInstructions"></a>

```python
def reset_answer_instructions() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_metrics` <a name="reset_metrics" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetMetrics"></a>

```python
def reset_metrics() -> None
```

##### `reset_order` <a name="reset_order" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetOrder"></a>

```python
def reset_order() -> None
```

##### `reset_predefined_question_config` <a name="reset_predefined_question_config" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetPredefinedQuestionConfig"></a>

```python
def reset_predefined_question_config() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_qa_question_data_options` <a name="reset_qa_question_data_options" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetQaQuestionDataOptions"></a>

```python
def reset_qa_question_data_options() -> None
```

##### `reset_question_body` <a name="reset_question_body" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetQuestionBody"></a>

```python
def reset_question_body() -> None
```

##### `reset_question_type` <a name="reset_question_type" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetQuestionType"></a>

```python
def reset_question_type() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_tuning_metadata` <a name="reset_tuning_metadata" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.resetTuningMetadata"></a>

```python
def reset_tuning_metadata() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleContactCenterInsightsQaQuestion resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_contact_center_insights_qa_question

googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_contact_center_insights_qa_question

googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_contact_center_insights_qa_question

googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_contact_center_insights_qa_question

googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleContactCenterInsightsQaQuestion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleContactCenterInsightsQaQuestion to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleContactCenterInsightsQaQuestion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_contact_center_insights_qa_question#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleContactCenterInsightsQaQuestion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.answerChoices">answer_choices</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList">GoogleContactCenterInsightsQaQuestionAnswerChoicesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.metrics">metrics</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference">GoogleContactCenterInsightsQaQuestionMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.predefinedQuestionConfig">predefined_question_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference">GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.qaQuestionDataOptions">qa_question_data_options</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference">GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference">GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.tuningMetadata">tuning_metadata</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference">GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.abbreviationInput">abbreviation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.answerChoicesInput">answer_choices_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoices">GoogleContactCenterInsightsQaQuestionAnswerChoices</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.answerInstructionsInput">answer_instructions_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.metricsInput">metrics_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetrics">GoogleContactCenterInsightsQaQuestionMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.orderInput">order_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.predefinedQuestionConfigInput">predefined_question_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig">GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.qaQuestionDataOptionsInput">qa_question_data_options_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions">GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.qaScorecardInput">qa_scorecard_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.questionBodyInput">question_body_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.questionTypeInput">question_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.revisionInput">revision_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeouts">GoogleContactCenterInsightsQaQuestionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.tuningMetadataInput">tuning_metadata_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadata">GoogleContactCenterInsightsQaQuestionTuningMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.abbreviation">abbreviation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.answerInstructions">answer_instructions</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.order">order</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.qaScorecard">qa_scorecard</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.questionBody">question_body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.questionType">question_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.revision">revision</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `answer_choices`<sup>Required</sup> <a name="answer_choices" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.answerChoices"></a>

```python
answer_choices: GoogleContactCenterInsightsQaQuestionAnswerChoicesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList">GoogleContactCenterInsightsQaQuestionAnswerChoicesList</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.metrics"></a>

```python
metrics: GoogleContactCenterInsightsQaQuestionMetricsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference">GoogleContactCenterInsightsQaQuestionMetricsOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `predefined_question_config`<sup>Required</sup> <a name="predefined_question_config" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.predefinedQuestionConfig"></a>

```python
predefined_question_config: GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference">GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference</a>

---

##### `qa_question_data_options`<sup>Required</sup> <a name="qa_question_data_options" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.qaQuestionDataOptions"></a>

```python
qa_question_data_options: GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference">GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.timeouts"></a>

```python
timeouts: GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference">GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference</a>

---

##### `tuning_metadata`<sup>Required</sup> <a name="tuning_metadata" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.tuningMetadata"></a>

```python
tuning_metadata: GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference">GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `abbreviation_input`<sup>Optional</sup> <a name="abbreviation_input" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.abbreviationInput"></a>

```python
abbreviation_input: str
```

- *Type:* str

---

##### `answer_choices_input`<sup>Optional</sup> <a name="answer_choices_input" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.answerChoicesInput"></a>

```python
answer_choices_input: IResolvable | typing.List[GoogleContactCenterInsightsQaQuestionAnswerChoices]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoices">GoogleContactCenterInsightsQaQuestionAnswerChoices</a>]

---

##### `answer_instructions_input`<sup>Optional</sup> <a name="answer_instructions_input" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.answerInstructionsInput"></a>

```python
answer_instructions_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `metrics_input`<sup>Optional</sup> <a name="metrics_input" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.metricsInput"></a>

```python
metrics_input: GoogleContactCenterInsightsQaQuestionMetrics
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetrics">GoogleContactCenterInsightsQaQuestionMetrics</a>

---

##### `order_input`<sup>Optional</sup> <a name="order_input" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.orderInput"></a>

```python
order_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `predefined_question_config_input`<sup>Optional</sup> <a name="predefined_question_config_input" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.predefinedQuestionConfigInput"></a>

```python
predefined_question_config_input: GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig">GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `qa_question_data_options_input`<sup>Optional</sup> <a name="qa_question_data_options_input" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.qaQuestionDataOptionsInput"></a>

```python
qa_question_data_options_input: GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions">GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions</a>

---

##### `qa_scorecard_input`<sup>Optional</sup> <a name="qa_scorecard_input" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.qaScorecardInput"></a>

```python
qa_scorecard_input: str
```

- *Type:* str

---

##### `question_body_input`<sup>Optional</sup> <a name="question_body_input" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.questionBodyInput"></a>

```python
question_body_input: str
```

- *Type:* str

---

##### `question_type_input`<sup>Optional</sup> <a name="question_type_input" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.questionTypeInput"></a>

```python
question_type_input: str
```

- *Type:* str

---

##### `revision_input`<sup>Optional</sup> <a name="revision_input" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.revisionInput"></a>

```python
revision_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleContactCenterInsightsQaQuestionTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeouts">GoogleContactCenterInsightsQaQuestionTimeouts</a>

---

##### `tuning_metadata_input`<sup>Optional</sup> <a name="tuning_metadata_input" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.tuningMetadataInput"></a>

```python
tuning_metadata_input: GoogleContactCenterInsightsQaQuestionTuningMetadata
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadata">GoogleContactCenterInsightsQaQuestionTuningMetadata</a>

---

##### `abbreviation`<sup>Required</sup> <a name="abbreviation" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.abbreviation"></a>

```python
abbreviation: str
```

- *Type:* str

---

##### `answer_instructions`<sup>Required</sup> <a name="answer_instructions" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.answerInstructions"></a>

```python
answer_instructions: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.order"></a>

```python
order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `qa_scorecard`<sup>Required</sup> <a name="qa_scorecard" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.qaScorecard"></a>

```python
qa_scorecard: str
```

- *Type:* str

---

##### `question_body`<sup>Required</sup> <a name="question_body" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.questionBody"></a>

```python
question_body: str
```

- *Type:* str

---

##### `question_type`<sup>Required</sup> <a name="question_type" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.questionType"></a>

```python
question_type: str
```

- *Type:* str

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.revision"></a>

```python
revision: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestion.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleContactCenterInsightsQaQuestionAnswerChoices <a name="GoogleContactCenterInsightsQaQuestionAnswerChoices" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoices"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoices.Initializer"></a>

```python
from cdktn_provider_google_beta import google_contact_center_insights_qa_question

googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoices(
  bool_value: bool | IResolvable = None,
  key: str = None,
  na_value: bool | IResolvable = None,
  num_value: typing.Union[int, float] = None,
  score: typing.Union[int, float] = None,
  str_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoices.property.boolValue">bool_value</a></code> | <code>bool \| cdktn.IResolvable</code> | Boolean value. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoices.property.key">key</a></code> | <code>str</code> | A short string used as an identifier. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoices.property.naValue">na_value</a></code> | <code>bool \| cdktn.IResolvable</code> | A value of "Not Applicable (N/A)". |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoices.property.numValue">num_value</a></code> | <code>typing.Union[int, float]</code> | Numerical value. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoices.property.score">score</a></code> | <code>typing.Union[int, float]</code> | Numerical score of the answer, used for generating the overall score of a QaScorecardResult. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoices.property.strValue">str_value</a></code> | <code>str</code> | String value. |

---

##### `bool_value`<sup>Optional</sup> <a name="bool_value" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoices.property.boolValue"></a>

```python
bool_value: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Boolean value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_contact_center_insights_qa_question#bool_value GoogleContactCenterInsightsQaQuestion#bool_value}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoices.property.key"></a>

```python
key: str
```

- *Type:* str

A short string used as an identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_contact_center_insights_qa_question#key GoogleContactCenterInsightsQaQuestion#key}

---

##### `na_value`<sup>Optional</sup> <a name="na_value" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoices.property.naValue"></a>

```python
na_value: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

A value of "Not Applicable (N/A)".

If provided, this field may only
be set to 'true'. If a question receives this answer, it will be
excluded from any score calculations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_contact_center_insights_qa_question#na_value GoogleContactCenterInsightsQaQuestion#na_value}

---

##### `num_value`<sup>Optional</sup> <a name="num_value" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoices.property.numValue"></a>

```python
num_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Numerical value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_contact_center_insights_qa_question#num_value GoogleContactCenterInsightsQaQuestion#num_value}

---

##### `score`<sup>Optional</sup> <a name="score" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoices.property.score"></a>

```python
score: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Numerical score of the answer, used for generating the overall score of a QaScorecardResult.

If the answer uses na_value, this field is unused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_contact_center_insights_qa_question#score GoogleContactCenterInsightsQaQuestion#score}

---

##### `str_value`<sup>Optional</sup> <a name="str_value" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoices.property.strValue"></a>

```python
str_value: str
```

- *Type:* str

String value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_contact_center_insights_qa_question#str_value GoogleContactCenterInsightsQaQuestion#str_value}

---

### GoogleContactCenterInsightsQaQuestionConfig <a name="GoogleContactCenterInsightsQaQuestionConfig" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_contact_center_insights_qa_question

googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  qa_scorecard: str,
  revision: str,
  abbreviation: str = None,
  answer_choices: IResolvable | typing.List[GoogleContactCenterInsightsQaQuestionAnswerChoices] = None,
  answer_instructions: str = None,
  deletion_policy: str = None,
  id: str = None,
  metrics: GoogleContactCenterInsightsQaQuestionMetrics = None,
  order: typing.Union[int, float] = None,
  predefined_question_config: GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig = None,
  project: str = None,
  qa_question_data_options: GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions = None,
  question_body: str = None,
  question_type: str = None,
  tags: typing.List[str] = None,
  timeouts: GoogleContactCenterInsightsQaQuestionTimeouts = None,
  tuning_metadata: GoogleContactCenterInsightsQaQuestionTuningMetadata = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.qaScorecard">qa_scorecard</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.revision">revision</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.abbreviation">abbreviation</a></code> | <code>str</code> | Short, descriptive string, used in the UI where it's not practical to display the full question body. E.g., "Greeting". |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.answerChoices">answer_choices</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoices">GoogleContactCenterInsightsQaQuestionAnswerChoices</a>]</code> | answer_choices block. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.answerInstructions">answer_instructions</a></code> | <code>str</code> | Instructions describing how to determine the answer. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_contact_center_insights_qa_question#id GoogleContactCenterInsightsQaQuestion#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.metrics">metrics</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetrics">GoogleContactCenterInsightsQaQuestionMetrics</a></code> | metrics block. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.order">order</a></code> | <code>typing.Union[int, float]</code> | Defines the order of the question within its parent scorecard revision. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.predefinedQuestionConfig">predefined_question_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig">GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig</a></code> | predefined_question_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_contact_center_insights_qa_question#project GoogleContactCenterInsightsQaQuestion#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.qaQuestionDataOptions">qa_question_data_options</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions">GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions</a></code> | qa_question_data_options block. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.questionBody">question_body</a></code> | <code>str</code> | Question text. E.g., "Did the agent greet the customer?". |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.questionType">question_type</a></code> | <code>str</code> | The type of question. Possible values: CUSTOMIZABLE PREDEFINED. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | Questions are tagged for categorization and scoring. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeouts">GoogleContactCenterInsightsQaQuestionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.tuningMetadata">tuning_metadata</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadata">GoogleContactCenterInsightsQaQuestionTuningMetadata</a></code> | tuning_metadata block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_contact_center_insights_qa_question#location GoogleContactCenterInsightsQaQuestion#location}

---

##### `qa_scorecard`<sup>Required</sup> <a name="qa_scorecard" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.qaScorecard"></a>

```python
qa_scorecard: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_contact_center_insights_qa_question#qa_scorecard GoogleContactCenterInsightsQaQuestion#qa_scorecard}

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.revision"></a>

```python
revision: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_contact_center_insights_qa_question#revision GoogleContactCenterInsightsQaQuestion#revision}

---

##### `abbreviation`<sup>Optional</sup> <a name="abbreviation" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.abbreviation"></a>

```python
abbreviation: str
```

- *Type:* str

Short, descriptive string, used in the UI where it's not practical to display the full question body. E.g., "Greeting".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_contact_center_insights_qa_question#abbreviation GoogleContactCenterInsightsQaQuestion#abbreviation}

---

##### `answer_choices`<sup>Optional</sup> <a name="answer_choices" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.answerChoices"></a>

```python
answer_choices: IResolvable | typing.List[GoogleContactCenterInsightsQaQuestionAnswerChoices]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoices">GoogleContactCenterInsightsQaQuestionAnswerChoices</a>]

answer_choices block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_contact_center_insights_qa_question#answer_choices GoogleContactCenterInsightsQaQuestion#answer_choices}

---

##### `answer_instructions`<sup>Optional</sup> <a name="answer_instructions" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.answerInstructions"></a>

```python
answer_instructions: str
```

- *Type:* str

Instructions describing how to determine the answer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_contact_center_insights_qa_question#answer_instructions GoogleContactCenterInsightsQaQuestion#answer_instructions}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_contact_center_insights_qa_question#deletion_policy GoogleContactCenterInsightsQaQuestion#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_contact_center_insights_qa_question#id GoogleContactCenterInsightsQaQuestion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metrics`<sup>Optional</sup> <a name="metrics" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.metrics"></a>

```python
metrics: GoogleContactCenterInsightsQaQuestionMetrics
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetrics">GoogleContactCenterInsightsQaQuestionMetrics</a>

metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_contact_center_insights_qa_question#metrics GoogleContactCenterInsightsQaQuestion#metrics}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.order"></a>

```python
order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Defines the order of the question within its parent scorecard revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_contact_center_insights_qa_question#order GoogleContactCenterInsightsQaQuestion#order}

---

##### `predefined_question_config`<sup>Optional</sup> <a name="predefined_question_config" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.predefinedQuestionConfig"></a>

```python
predefined_question_config: GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig">GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig</a>

predefined_question_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_contact_center_insights_qa_question#predefined_question_config GoogleContactCenterInsightsQaQuestion#predefined_question_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_contact_center_insights_qa_question#project GoogleContactCenterInsightsQaQuestion#project}.

---

##### `qa_question_data_options`<sup>Optional</sup> <a name="qa_question_data_options" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.qaQuestionDataOptions"></a>

```python
qa_question_data_options: GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions">GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions</a>

qa_question_data_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_contact_center_insights_qa_question#qa_question_data_options GoogleContactCenterInsightsQaQuestion#qa_question_data_options}

---

##### `question_body`<sup>Optional</sup> <a name="question_body" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.questionBody"></a>

```python
question_body: str
```

- *Type:* str

Question text. E.g., "Did the agent greet the customer?".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_contact_center_insights_qa_question#question_body GoogleContactCenterInsightsQaQuestion#question_body}

---

##### `question_type`<sup>Optional</sup> <a name="question_type" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.questionType"></a>

```python
question_type: str
```

- *Type:* str

The type of question. Possible values: CUSTOMIZABLE PREDEFINED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_contact_center_insights_qa_question#question_type GoogleContactCenterInsightsQaQuestion#question_type}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

Questions are tagged for categorization and scoring.

Tags can either be:

* Default Tags: These are predefined categories. They are identified by
  their string value (e.g., "BUSINESS", "COMPLIANCE", and "CUSTOMER").
* Custom Tags: These are user-defined categories. They are identified by
  their full resource name (e.g.,
  projects/{project}/locations/{location}/qaQuestionTags/{qa_question_tag}).
  Both default and custom tags are used to group questions and to influence
  the scoring of each question.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_contact_center_insights_qa_question#tags GoogleContactCenterInsightsQaQuestion#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.timeouts"></a>

```python
timeouts: GoogleContactCenterInsightsQaQuestionTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeouts">GoogleContactCenterInsightsQaQuestionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_contact_center_insights_qa_question#timeouts GoogleContactCenterInsightsQaQuestion#timeouts}

---

##### `tuning_metadata`<sup>Optional</sup> <a name="tuning_metadata" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionConfig.property.tuningMetadata"></a>

```python
tuning_metadata: GoogleContactCenterInsightsQaQuestionTuningMetadata
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadata">GoogleContactCenterInsightsQaQuestionTuningMetadata</a>

tuning_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_contact_center_insights_qa_question#tuning_metadata GoogleContactCenterInsightsQaQuestion#tuning_metadata}

---

### GoogleContactCenterInsightsQaQuestionMetrics <a name="GoogleContactCenterInsightsQaQuestionMetrics" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetrics.Initializer"></a>

```python
from cdktn_provider_google_beta import google_contact_center_insights_qa_question

googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetrics()
```


### GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig <a name="GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_contact_center_insights_qa_question

googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig(
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig.property.type">type</a></code> | <code>str</code> | The type of the predefined question. Possible values: CONVERSATION_OUTCOME CONVERSATION_OUTCOME_ESCALATION_INITIATOR_ROLE. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of the predefined question. Possible values: CONVERSATION_OUTCOME CONVERSATION_OUTCOME_ESCALATION_INITIATOR_ROLE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_contact_center_insights_qa_question#type GoogleContactCenterInsightsQaQuestion#type}

---

### GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions <a name="GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions.Initializer"></a>

```python
from cdktn_provider_google_beta import google_contact_center_insights_qa_question

googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions(
  conversation_data_options: GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions.property.conversationDataOptions">conversation_data_options</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions">GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions</a></code> | conversation_data_options block. |

---

##### `conversation_data_options`<sup>Optional</sup> <a name="conversation_data_options" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions.property.conversationDataOptions"></a>

```python
conversation_data_options: GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions">GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions</a>

conversation_data_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_contact_center_insights_qa_question#conversation_data_options GoogleContactCenterInsightsQaQuestion#conversation_data_options}

---

### GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions <a name="GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions.Initializer"></a>

```python
from cdktn_provider_google_beta import google_contact_center_insights_qa_question

googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions(
  include_dialogflow_interaction_data: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions.property.includeDialogflowInteractionData">include_dialogflow_interaction_data</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to include the per turn Dialogflow interaction data in conversation transcript. |

---

##### `include_dialogflow_interaction_data`<sup>Optional</sup> <a name="include_dialogflow_interaction_data" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions.property.includeDialogflowInteractionData"></a>

```python
include_dialogflow_interaction_data: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to include the per turn Dialogflow interaction data in conversation transcript.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_contact_center_insights_qa_question#include_dialogflow_interaction_data GoogleContactCenterInsightsQaQuestion#include_dialogflow_interaction_data}

---

### GoogleContactCenterInsightsQaQuestionTimeouts <a name="GoogleContactCenterInsightsQaQuestionTimeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_contact_center_insights_qa_question

googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_contact_center_insights_qa_question#create GoogleContactCenterInsightsQaQuestion#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_contact_center_insights_qa_question#delete GoogleContactCenterInsightsQaQuestion#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_contact_center_insights_qa_question#update GoogleContactCenterInsightsQaQuestion#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_contact_center_insights_qa_question#create GoogleContactCenterInsightsQaQuestion#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_contact_center_insights_qa_question#delete GoogleContactCenterInsightsQaQuestion#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_contact_center_insights_qa_question#update GoogleContactCenterInsightsQaQuestion#update}.

---

### GoogleContactCenterInsightsQaQuestionTuningMetadata <a name="GoogleContactCenterInsightsQaQuestionTuningMetadata" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadata.Initializer"></a>

```python
from cdktn_provider_google_beta import google_contact_center_insights_qa_question

googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadata(
  dataset_validation_warnings: typing.List[str] = None,
  total_valid_label_count: str = None,
  tuning_error: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadata.property.datasetValidationWarnings">dataset_validation_warnings</a></code> | <code>typing.List[str]</code> | A list of any applicable data validation warnings about the question's feedback labels. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadata.property.totalValidLabelCount">total_valid_label_count</a></code> | <code>str</code> | Total number of valid labels provided for the question at the time of tuining. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadata.property.tuningError">tuning_error</a></code> | <code>str</code> | Error status of the tuning operation for the question. Will only be set if the tuning operation failed. |

---

##### `dataset_validation_warnings`<sup>Optional</sup> <a name="dataset_validation_warnings" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadata.property.datasetValidationWarnings"></a>

```python
dataset_validation_warnings: typing.List[str]
```

- *Type:* typing.List[str]

A list of any applicable data validation warnings about the question's feedback labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_contact_center_insights_qa_question#dataset_validation_warnings GoogleContactCenterInsightsQaQuestion#dataset_validation_warnings}

---

##### `total_valid_label_count`<sup>Optional</sup> <a name="total_valid_label_count" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadata.property.totalValidLabelCount"></a>

```python
total_valid_label_count: str
```

- *Type:* str

Total number of valid labels provided for the question at the time of tuining.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_contact_center_insights_qa_question#total_valid_label_count GoogleContactCenterInsightsQaQuestion#total_valid_label_count}

---

##### `tuning_error`<sup>Optional</sup> <a name="tuning_error" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadata.property.tuningError"></a>

```python
tuning_error: str
```

- *Type:* str

Error status of the tuning operation for the question. Will only be set if the tuning operation failed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_contact_center_insights_qa_question#tuning_error GoogleContactCenterInsightsQaQuestion#tuning_error}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleContactCenterInsightsQaQuestionAnswerChoicesList <a name="GoogleContactCenterInsightsQaQuestionAnswerChoicesList" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_contact_center_insights_qa_question

googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoices">GoogleContactCenterInsightsQaQuestionAnswerChoices</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleContactCenterInsightsQaQuestionAnswerChoices]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoices">GoogleContactCenterInsightsQaQuestionAnswerChoices</a>]

---


### GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference <a name="GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_contact_center_insights_qa_question

googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetBoolValue">reset_bool_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetNaValue">reset_na_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetNumValue">reset_num_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetScore">reset_score</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetStrValue">reset_str_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bool_value` <a name="reset_bool_value" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetBoolValue"></a>

```python
def reset_bool_value() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_na_value` <a name="reset_na_value" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetNaValue"></a>

```python
def reset_na_value() -> None
```

##### `reset_num_value` <a name="reset_num_value" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetNumValue"></a>

```python
def reset_num_value() -> None
```

##### `reset_score` <a name="reset_score" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetScore"></a>

```python
def reset_score() -> None
```

##### `reset_str_value` <a name="reset_str_value" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.resetStrValue"></a>

```python
def reset_str_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.boolValueInput">bool_value_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.naValueInput">na_value_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.numValueInput">num_value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.scoreInput">score_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.strValueInput">str_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.boolValue">bool_value</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.naValue">na_value</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.numValue">num_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.score">score</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.strValue">str_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoices">GoogleContactCenterInsightsQaQuestionAnswerChoices</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bool_value_input`<sup>Optional</sup> <a name="bool_value_input" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.boolValueInput"></a>

```python
bool_value_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `na_value_input`<sup>Optional</sup> <a name="na_value_input" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.naValueInput"></a>

```python
na_value_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `num_value_input`<sup>Optional</sup> <a name="num_value_input" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.numValueInput"></a>

```python
num_value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `score_input`<sup>Optional</sup> <a name="score_input" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.scoreInput"></a>

```python
score_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `str_value_input`<sup>Optional</sup> <a name="str_value_input" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.strValueInput"></a>

```python
str_value_input: str
```

- *Type:* str

---

##### `bool_value`<sup>Required</sup> <a name="bool_value" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.boolValue"></a>

```python
bool_value: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `na_value`<sup>Required</sup> <a name="na_value" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.naValue"></a>

```python
na_value: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `num_value`<sup>Required</sup> <a name="num_value" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.numValue"></a>

```python
num_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `score`<sup>Required</sup> <a name="score" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.score"></a>

```python
score: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `str_value`<sup>Required</sup> <a name="str_value" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.strValue"></a>

```python
str_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoicesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleContactCenterInsightsQaQuestionAnswerChoices
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionAnswerChoices">GoogleContactCenterInsightsQaQuestionAnswerChoices</a>

---


### GoogleContactCenterInsightsQaQuestionMetricsOutputReference <a name="GoogleContactCenterInsightsQaQuestionMetricsOutputReference" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_contact_center_insights_qa_question

googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.property.accuracy">accuracy</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetrics">GoogleContactCenterInsightsQaQuestionMetrics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `accuracy`<sup>Required</sup> <a name="accuracy" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.property.accuracy"></a>

```python
accuracy: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetricsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleContactCenterInsightsQaQuestionMetrics
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionMetrics">GoogleContactCenterInsightsQaQuestionMetrics</a>

---


### GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference <a name="GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_contact_center_insights_qa_question

googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_type` <a name="reset_type" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig">GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig">GoogleContactCenterInsightsQaQuestionPredefinedQuestionConfig</a>

---


### GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference <a name="GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_contact_center_insights_qa_question

googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.resetIncludeDialogflowInteractionData">reset_include_dialogflow_interaction_data</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_include_dialogflow_interaction_data` <a name="reset_include_dialogflow_interaction_data" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.resetIncludeDialogflowInteractionData"></a>

```python
def reset_include_dialogflow_interaction_data() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.property.includeDialogflowInteractionDataInput">include_dialogflow_interaction_data_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.property.includeDialogflowInteractionData">include_dialogflow_interaction_data</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions">GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `include_dialogflow_interaction_data_input`<sup>Optional</sup> <a name="include_dialogflow_interaction_data_input" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.property.includeDialogflowInteractionDataInput"></a>

```python
include_dialogflow_interaction_data_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `include_dialogflow_interaction_data`<sup>Required</sup> <a name="include_dialogflow_interaction_data" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.property.includeDialogflowInteractionData"></a>

```python
include_dialogflow_interaction_data: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions">GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions</a>

---


### GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference <a name="GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_contact_center_insights_qa_question

googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.putConversationDataOptions">put_conversation_data_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.resetConversationDataOptions">reset_conversation_data_options</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_conversation_data_options` <a name="put_conversation_data_options" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.putConversationDataOptions"></a>

```python
def put_conversation_data_options(
  include_dialogflow_interaction_data: bool | IResolvable = None
) -> None
```

###### `include_dialogflow_interaction_data`<sup>Optional</sup> <a name="include_dialogflow_interaction_data" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.putConversationDataOptions.parameter.includeDialogflowInteractionData"></a>

- *Type:* bool | cdktn.IResolvable

Whether to include the per turn Dialogflow interaction data in conversation transcript.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_contact_center_insights_qa_question#include_dialogflow_interaction_data GoogleContactCenterInsightsQaQuestion#include_dialogflow_interaction_data}

---

##### `reset_conversation_data_options` <a name="reset_conversation_data_options" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.resetConversationDataOptions"></a>

```python
def reset_conversation_data_options() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.property.conversationDataOptions">conversation_data_options</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference">GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.property.conversationDataOptionsInput">conversation_data_options_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions">GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions">GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `conversation_data_options`<sup>Required</sup> <a name="conversation_data_options" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.property.conversationDataOptions"></a>

```python
conversation_data_options: GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference">GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptionsOutputReference</a>

---

##### `conversation_data_options_input`<sup>Optional</sup> <a name="conversation_data_options_input" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.property.conversationDataOptionsInput"></a>

```python
conversation_data_options_input: GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions">GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsConversationDataOptions</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptionsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions">GoogleContactCenterInsightsQaQuestionQaQuestionDataOptions</a>

---


### GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference <a name="GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_contact_center_insights_qa_question

googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeouts">GoogleContactCenterInsightsQaQuestionTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleContactCenterInsightsQaQuestionTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTimeouts">GoogleContactCenterInsightsQaQuestionTimeouts</a>

---


### GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference <a name="GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_contact_center_insights_qa_question

googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.resetDatasetValidationWarnings">reset_dataset_validation_warnings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.resetTotalValidLabelCount">reset_total_valid_label_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.resetTuningError">reset_tuning_error</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dataset_validation_warnings` <a name="reset_dataset_validation_warnings" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.resetDatasetValidationWarnings"></a>

```python
def reset_dataset_validation_warnings() -> None
```

##### `reset_total_valid_label_count` <a name="reset_total_valid_label_count" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.resetTotalValidLabelCount"></a>

```python
def reset_total_valid_label_count() -> None
```

##### `reset_tuning_error` <a name="reset_tuning_error" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.resetTuningError"></a>

```python
def reset_tuning_error() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.datasetValidationWarningsInput">dataset_validation_warnings_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.totalValidLabelCountInput">total_valid_label_count_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.tuningErrorInput">tuning_error_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.datasetValidationWarnings">dataset_validation_warnings</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.totalValidLabelCount">total_valid_label_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.tuningError">tuning_error</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadata">GoogleContactCenterInsightsQaQuestionTuningMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataset_validation_warnings_input`<sup>Optional</sup> <a name="dataset_validation_warnings_input" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.datasetValidationWarningsInput"></a>

```python
dataset_validation_warnings_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `total_valid_label_count_input`<sup>Optional</sup> <a name="total_valid_label_count_input" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.totalValidLabelCountInput"></a>

```python
total_valid_label_count_input: str
```

- *Type:* str

---

##### `tuning_error_input`<sup>Optional</sup> <a name="tuning_error_input" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.tuningErrorInput"></a>

```python
tuning_error_input: str
```

- *Type:* str

---

##### `dataset_validation_warnings`<sup>Required</sup> <a name="dataset_validation_warnings" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.datasetValidationWarnings"></a>

```python
dataset_validation_warnings: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `total_valid_label_count`<sup>Required</sup> <a name="total_valid_label_count" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.totalValidLabelCount"></a>

```python
total_valid_label_count: str
```

- *Type:* str

---

##### `tuning_error`<sup>Required</sup> <a name="tuning_error" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.tuningError"></a>

```python
tuning_error: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadataOutputReference.property.internalValue"></a>

```python
internal_value: GoogleContactCenterInsightsQaQuestionTuningMetadata
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaQuestion.GoogleContactCenterInsightsQaQuestionTuningMetadata">GoogleContactCenterInsightsQaQuestionTuningMetadata</a>

---



