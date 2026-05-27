# `googleContactCenterInsightsAssessmentRule` Submodule <a name="`googleContactCenterInsightsAssessmentRule` Submodule" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleContactCenterInsightsAssessmentRule <a name="GoogleContactCenterInsightsAssessmentRule" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_assessment_rule google_contact_center_insights_assessment_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleContactCenterInsightsAssessmentRule(Construct Scope, string Id, GoogleContactCenterInsightsAssessmentRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig">GoogleContactCenterInsightsAssessmentRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig">GoogleContactCenterInsightsAssessmentRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.putSampleRule">PutSampleRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.putScheduleInfo">PutScheduleInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.resetActive">ResetActive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.resetAssessmentRuleId">ResetAssessmentRuleId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.resetSampleRule">ResetSampleRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.resetScheduleInfo">ResetScheduleInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSampleRule` <a name="PutSampleRule" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.putSampleRule"></a>

```csharp
private void PutSampleRule(GoogleContactCenterInsightsAssessmentRuleSampleRule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.putSampleRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRule">GoogleContactCenterInsightsAssessmentRuleSampleRule</a>

---

##### `PutScheduleInfo` <a name="PutScheduleInfo" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.putScheduleInfo"></a>

```csharp
private void PutScheduleInfo(GoogleContactCenterInsightsAssessmentRuleScheduleInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.putScheduleInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfo">GoogleContactCenterInsightsAssessmentRuleScheduleInfo</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleContactCenterInsightsAssessmentRuleTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeouts">GoogleContactCenterInsightsAssessmentRuleTimeouts</a>

---

##### `ResetActive` <a name="ResetActive" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.resetActive"></a>

```csharp
private void ResetActive()
```

##### `ResetAssessmentRuleId` <a name="ResetAssessmentRuleId" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.resetAssessmentRuleId"></a>

```csharp
private void ResetAssessmentRuleId()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetSampleRule` <a name="ResetSampleRule" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.resetSampleRule"></a>

```csharp
private void ResetSampleRule()
```

##### `ResetScheduleInfo` <a name="ResetScheduleInfo" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.resetScheduleInfo"></a>

```csharp
private void ResetScheduleInfo()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleContactCenterInsightsAssessmentRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleContactCenterInsightsAssessmentRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleContactCenterInsightsAssessmentRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleContactCenterInsightsAssessmentRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleContactCenterInsightsAssessmentRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleContactCenterInsightsAssessmentRule resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleContactCenterInsightsAssessmentRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleContactCenterInsightsAssessmentRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_assessment_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleContactCenterInsightsAssessmentRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.sampleRule">SampleRule</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference">GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.scheduleInfo">ScheduleInfo</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference">GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference">GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.activeInput">ActiveInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.assessmentRuleIdInput">AssessmentRuleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.sampleRuleInput">SampleRuleInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRule">GoogleContactCenterInsightsAssessmentRuleSampleRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.scheduleInfoInput">ScheduleInfoInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfo">GoogleContactCenterInsightsAssessmentRuleScheduleInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeouts">GoogleContactCenterInsightsAssessmentRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.active">Active</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.assessmentRuleId">AssessmentRuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SampleRule`<sup>Required</sup> <a name="SampleRule" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.sampleRule"></a>

```csharp
public GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference SampleRule { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference">GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference</a>

---

##### `ScheduleInfo`<sup>Required</sup> <a name="ScheduleInfo" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.scheduleInfo"></a>

```csharp
public GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference ScheduleInfo { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference">GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.timeouts"></a>

```csharp
public GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference">GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `ActiveInput`<sup>Optional</sup> <a name="ActiveInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.activeInput"></a>

```csharp
public bool|IResolvable ActiveInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AssessmentRuleIdInput`<sup>Optional</sup> <a name="AssessmentRuleIdInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.assessmentRuleIdInput"></a>

```csharp
public string AssessmentRuleIdInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `SampleRuleInput`<sup>Optional</sup> <a name="SampleRuleInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.sampleRuleInput"></a>

```csharp
public GoogleContactCenterInsightsAssessmentRuleSampleRule SampleRuleInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRule">GoogleContactCenterInsightsAssessmentRuleSampleRule</a>

---

##### `ScheduleInfoInput`<sup>Optional</sup> <a name="ScheduleInfoInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.scheduleInfoInput"></a>

```csharp
public GoogleContactCenterInsightsAssessmentRuleScheduleInfo ScheduleInfoInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfo">GoogleContactCenterInsightsAssessmentRuleScheduleInfo</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleContactCenterInsightsAssessmentRuleTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeouts">GoogleContactCenterInsightsAssessmentRuleTimeouts</a>

---

##### `Active`<sup>Required</sup> <a name="Active" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.active"></a>

```csharp
public bool|IResolvable Active { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AssessmentRuleId`<sup>Required</sup> <a name="AssessmentRuleId" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.assessmentRuleId"></a>

```csharp
public string AssessmentRuleId { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleContactCenterInsightsAssessmentRuleConfig <a name="GoogleContactCenterInsightsAssessmentRuleConfig" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleContactCenterInsightsAssessmentRuleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    bool|IResolvable Active = null,
    string AssessmentRuleId = null,
    string DeletionPolicy = null,
    string DisplayName = null,
    string Id = null,
    string Project = null,
    GoogleContactCenterInsightsAssessmentRuleSampleRule SampleRule = null,
    GoogleContactCenterInsightsAssessmentRuleScheduleInfo ScheduleInfo = null,
    GoogleContactCenterInsightsAssessmentRuleTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.location">Location</a></code> | <code>string</code> | Location of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.active">Active</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, apply this rule to conversations. Otherwise, this rule is inactive. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.assessmentRuleId">AssessmentRuleId</a></code> | <code>string</code> | A unique ID for the new AssessmentRule. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Display Name of the assessment rule. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_assessment_rule#id GoogleContactCenterInsightsAssessmentRule#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_assessment_rule#project GoogleContactCenterInsightsAssessmentRule#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.sampleRule">SampleRule</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRule">GoogleContactCenterInsightsAssessmentRuleSampleRule</a></code> | sample_rule block. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.scheduleInfo">ScheduleInfo</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfo">GoogleContactCenterInsightsAssessmentRuleScheduleInfo</a></code> | schedule_info block. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeouts">GoogleContactCenterInsightsAssessmentRuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_assessment_rule#location GoogleContactCenterInsightsAssessmentRule#location}

---

##### `Active`<sup>Optional</sup> <a name="Active" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.active"></a>

```csharp
public bool|IResolvable Active { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, apply this rule to conversations. Otherwise, this rule is inactive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_assessment_rule#active GoogleContactCenterInsightsAssessmentRule#active}

---

##### `AssessmentRuleId`<sup>Optional</sup> <a name="AssessmentRuleId" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.assessmentRuleId"></a>

```csharp
public string AssessmentRuleId { get; set; }
```

- *Type:* string

A unique ID for the new AssessmentRule.

This ID will become the final
component of the AssessmentRule's resource name. If no ID is specified,
a server-generated ID will be used.

This value should be 4-64 characters and must match the regular
expression '^[A-Za-z0-9]{4,64}$'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_assessment_rule#assessment_rule_id GoogleContactCenterInsightsAssessmentRule#assessment_rule_id}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; set; }
```

- *Type:* string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_assessment_rule#deletion_policy GoogleContactCenterInsightsAssessmentRule#deletion_policy}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Display Name of the assessment rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_assessment_rule#display_name GoogleContactCenterInsightsAssessmentRule#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_assessment_rule#id GoogleContactCenterInsightsAssessmentRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_assessment_rule#project GoogleContactCenterInsightsAssessmentRule#project}.

---

##### `SampleRule`<sup>Optional</sup> <a name="SampleRule" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.sampleRule"></a>

```csharp
public GoogleContactCenterInsightsAssessmentRuleSampleRule SampleRule { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRule">GoogleContactCenterInsightsAssessmentRuleSampleRule</a>

sample_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_assessment_rule#sample_rule GoogleContactCenterInsightsAssessmentRule#sample_rule}

---

##### `ScheduleInfo`<sup>Optional</sup> <a name="ScheduleInfo" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.scheduleInfo"></a>

```csharp
public GoogleContactCenterInsightsAssessmentRuleScheduleInfo ScheduleInfo { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfo">GoogleContactCenterInsightsAssessmentRuleScheduleInfo</a>

schedule_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_assessment_rule#schedule_info GoogleContactCenterInsightsAssessmentRule#schedule_info}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleConfig.property.timeouts"></a>

```csharp
public GoogleContactCenterInsightsAssessmentRuleTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeouts">GoogleContactCenterInsightsAssessmentRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_assessment_rule#timeouts GoogleContactCenterInsightsAssessmentRule#timeouts}

---

### GoogleContactCenterInsightsAssessmentRuleSampleRule <a name="GoogleContactCenterInsightsAssessmentRuleSampleRule" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleContactCenterInsightsAssessmentRuleSampleRule {
    string ConversationFilter = null,
    string Dimension = null,
    double SamplePercentage = null,
    double SampleRow = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRule.property.conversationFilter">ConversationFilter</a></code> | <code>string</code> | To specify the filter for the conversions that should apply this sample rule. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRule.property.dimension">Dimension</a></code> | <code>string</code> | Group by dimension to sample the conversation. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRule.property.samplePercentage">SamplePercentage</a></code> | <code>double</code> | Percentage of conversations that we should sample  based on the dimension between [0, 100]. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRule.property.sampleRow">SampleRow</a></code> | <code>double</code> | Number of the conversations that we should sample based on the dimension. |

---

##### `ConversationFilter`<sup>Optional</sup> <a name="ConversationFilter" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRule.property.conversationFilter"></a>

```csharp
public string ConversationFilter { get; set; }
```

- *Type:* string

To specify the filter for the conversions that should apply this sample rule.

An empty filter means this sample rule applies to all conversations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_assessment_rule#conversation_filter GoogleContactCenterInsightsAssessmentRule#conversation_filter}

---

##### `Dimension`<sup>Optional</sup> <a name="Dimension" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRule.property.dimension"></a>

```csharp
public string Dimension { get; set; }
```

- *Type:* string

Group by dimension to sample the conversation.

If no dimension is
provided, the sampling will be applied to the project level.
Current supported dimensions is 'quality_metadata.agent_info.agent_id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_assessment_rule#dimension GoogleContactCenterInsightsAssessmentRule#dimension}

---

##### `SamplePercentage`<sup>Optional</sup> <a name="SamplePercentage" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRule.property.samplePercentage"></a>

```csharp
public double SamplePercentage { get; set; }
```

- *Type:* double

Percentage of conversations that we should sample  based on the dimension between [0, 100].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_assessment_rule#sample_percentage GoogleContactCenterInsightsAssessmentRule#sample_percentage}

---

##### `SampleRow`<sup>Optional</sup> <a name="SampleRow" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRule.property.sampleRow"></a>

```csharp
public double SampleRow { get; set; }
```

- *Type:* double

Number of the conversations that we should sample based on the dimension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_assessment_rule#sample_row GoogleContactCenterInsightsAssessmentRule#sample_row}

---

### GoogleContactCenterInsightsAssessmentRuleScheduleInfo <a name="GoogleContactCenterInsightsAssessmentRuleScheduleInfo" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleContactCenterInsightsAssessmentRuleScheduleInfo {
    string EndTime = null,
    string Schedule = null,
    string StartTime = null,
    string TimeZone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfo.property.endTime">EndTime</a></code> | <code>string</code> | End time of the schedule. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfo.property.schedule">Schedule</a></code> | <code>string</code> | The groc expression. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfo.property.startTime">StartTime</a></code> | <code>string</code> | Start time of the schedule. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfo.property.timeZone">TimeZone</a></code> | <code>string</code> | The timezone to use for the groc expression. If not specified, defaults to UTC. |

---

##### `EndTime`<sup>Optional</sup> <a name="EndTime" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfo.property.endTime"></a>

```csharp
public string EndTime { get; set; }
```

- *Type:* string

End time of the schedule.

If not specified, will keep scheduling new
pipelines for execution until the schedule is no longer active or deleted.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and
up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_assessment_rule#end_time GoogleContactCenterInsightsAssessmentRule#end_time}

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfo.property.schedule"></a>

```csharp
public string Schedule { get; set; }
```

- *Type:* string

The groc expression.

Format: 'every number [synchronized]'
Cron syntax is not supported.
Time units can be: minutes, hours
Synchronized is optional and indicates that the schedule should be
synchronized to the start of the interval: every 5 minutes synchronized
means 00:00, 00:05 ...
Otherwise the start time is random within the interval.
Example: 'every 5 minutes'
could be  00:02, 00:07, 00:12, ...

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_assessment_rule#schedule GoogleContactCenterInsightsAssessmentRule#schedule}

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfo.property.startTime"></a>

```csharp
public string StartTime { get; set; }
```

- *Type:* string

Start time of the schedule.

If not specified, will start as soon as the
schedule is created.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and
up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_assessment_rule#start_time GoogleContactCenterInsightsAssessmentRule#start_time}

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfo.property.timeZone"></a>

```csharp
public string TimeZone { get; set; }
```

- *Type:* string

The timezone to use for the groc expression. If not specified, defaults to UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_assessment_rule#time_zone GoogleContactCenterInsightsAssessmentRule#time_zone}

---

### GoogleContactCenterInsightsAssessmentRuleTimeouts <a name="GoogleContactCenterInsightsAssessmentRuleTimeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleContactCenterInsightsAssessmentRuleTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_assessment_rule#create GoogleContactCenterInsightsAssessmentRule#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_assessment_rule#delete GoogleContactCenterInsightsAssessmentRule#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_assessment_rule#update GoogleContactCenterInsightsAssessmentRule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_assessment_rule#create GoogleContactCenterInsightsAssessmentRule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_assessment_rule#delete GoogleContactCenterInsightsAssessmentRule#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_contact_center_insights_assessment_rule#update GoogleContactCenterInsightsAssessmentRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference <a name="GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.resetConversationFilter">ResetConversationFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.resetDimension">ResetDimension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.resetSamplePercentage">ResetSamplePercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.resetSampleRow">ResetSampleRow</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConversationFilter` <a name="ResetConversationFilter" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.resetConversationFilter"></a>

```csharp
private void ResetConversationFilter()
```

##### `ResetDimension` <a name="ResetDimension" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.resetDimension"></a>

```csharp
private void ResetDimension()
```

##### `ResetSamplePercentage` <a name="ResetSamplePercentage" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.resetSamplePercentage"></a>

```csharp
private void ResetSamplePercentage()
```

##### `ResetSampleRow` <a name="ResetSampleRow" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.resetSampleRow"></a>

```csharp
private void ResetSampleRow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.conversationFilterInput">ConversationFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.dimensionInput">DimensionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.samplePercentageInput">SamplePercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.sampleRowInput">SampleRowInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.conversationFilter">ConversationFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.dimension">Dimension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.samplePercentage">SamplePercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.sampleRow">SampleRow</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRule">GoogleContactCenterInsightsAssessmentRuleSampleRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConversationFilterInput`<sup>Optional</sup> <a name="ConversationFilterInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.conversationFilterInput"></a>

```csharp
public string ConversationFilterInput { get; }
```

- *Type:* string

---

##### `DimensionInput`<sup>Optional</sup> <a name="DimensionInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.dimensionInput"></a>

```csharp
public string DimensionInput { get; }
```

- *Type:* string

---

##### `SamplePercentageInput`<sup>Optional</sup> <a name="SamplePercentageInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.samplePercentageInput"></a>

```csharp
public double SamplePercentageInput { get; }
```

- *Type:* double

---

##### `SampleRowInput`<sup>Optional</sup> <a name="SampleRowInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.sampleRowInput"></a>

```csharp
public double SampleRowInput { get; }
```

- *Type:* double

---

##### `ConversationFilter`<sup>Required</sup> <a name="ConversationFilter" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.conversationFilter"></a>

```csharp
public string ConversationFilter { get; }
```

- *Type:* string

---

##### `Dimension`<sup>Required</sup> <a name="Dimension" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.dimension"></a>

```csharp
public string Dimension { get; }
```

- *Type:* string

---

##### `SamplePercentage`<sup>Required</sup> <a name="SamplePercentage" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.samplePercentage"></a>

```csharp
public double SamplePercentage { get; }
```

- *Type:* double

---

##### `SampleRow`<sup>Required</sup> <a name="SampleRow" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.sampleRow"></a>

```csharp
public double SampleRow { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRuleOutputReference.property.internalValue"></a>

```csharp
public GoogleContactCenterInsightsAssessmentRuleSampleRule InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleSampleRule">GoogleContactCenterInsightsAssessmentRuleSampleRule</a>

---


### GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference <a name="GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.resetEndTime">ResetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.resetSchedule">ResetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndTime` <a name="ResetEndTime" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.resetEndTime"></a>

```csharp
private void ResetEndTime()
```

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.resetSchedule"></a>

```csharp
private void ResetSchedule()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.resetStartTime"></a>

```csharp
private void ResetStartTime()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.resetTimeZone"></a>

```csharp
private void ResetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.endTimeInput">EndTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.scheduleInput">ScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.schedule">Schedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfo">GoogleContactCenterInsightsAssessmentRuleScheduleInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.endTimeInput"></a>

```csharp
public string EndTimeInput { get; }
```

- *Type:* string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.scheduleInput"></a>

```csharp
public string ScheduleInput { get; }
```

- *Type:* string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.startTimeInput"></a>

```csharp
public string StartTimeInput { get; }
```

- *Type:* string

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.timeZoneInput"></a>

```csharp
public string TimeZoneInput { get; }
```

- *Type:* string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.schedule"></a>

```csharp
public string Schedule { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfoOutputReference.property.internalValue"></a>

```csharp
public GoogleContactCenterInsightsAssessmentRuleScheduleInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleScheduleInfo">GoogleContactCenterInsightsAssessmentRuleScheduleInfo</a>

---


### GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference <a name="GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeouts">GoogleContactCenterInsightsAssessmentRuleTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleContactCenterInsightsAssessmentRuleTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleContactCenterInsightsAssessmentRule.GoogleContactCenterInsightsAssessmentRuleTimeouts">GoogleContactCenterInsightsAssessmentRuleTimeouts</a>

---



