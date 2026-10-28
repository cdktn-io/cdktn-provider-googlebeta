# `googleGeminiDataAnalyticsDataAgentIamMember` Submodule <a name="`googleGeminiDataAnalyticsDataAgentIamMember` Submodule" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleGeminiDataAnalyticsDataAgentIamMember <a name="GoogleGeminiDataAnalyticsDataAgentIamMember" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_member google_gemini_data_analytics_data_agent_iam_member}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleGeminiDataAnalyticsDataAgentIamMember(Construct Scope, string Id, GoogleGeminiDataAnalyticsDataAgentIamMemberConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConfig">GoogleGeminiDataAnalyticsDataAgentIamMemberConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConfig">GoogleGeminiDataAnalyticsDataAgentIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.putCondition"></a>

```csharp
private void PutCondition(GoogleGeminiDataAnalyticsDataAgentIamMemberCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberCondition">GoogleGeminiDataAnalyticsDataAgentIamMemberCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleGeminiDataAnalyticsDataAgentIamMember resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleGeminiDataAnalyticsDataAgentIamMember.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleGeminiDataAnalyticsDataAgentIamMember.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleGeminiDataAnalyticsDataAgentIamMember.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleGeminiDataAnalyticsDataAgentIamMember.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleGeminiDataAnalyticsDataAgentIamMember resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleGeminiDataAnalyticsDataAgentIamMember to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleGeminiDataAnalyticsDataAgentIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleGeminiDataAnalyticsDataAgentIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConditionOutputReference">GoogleGeminiDataAnalyticsDataAgentIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberCondition">GoogleGeminiDataAnalyticsDataAgentIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.property.dataAgentIdInput">DataAgentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.property.memberInput">MemberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.property.dataAgentId">DataAgentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.property.member">Member</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.property.role">Role</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.property.condition"></a>

```csharp
public GoogleGeminiDataAnalyticsDataAgentIamMemberConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConditionOutputReference">GoogleGeminiDataAnalyticsDataAgentIamMemberConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.property.conditionInput"></a>

```csharp
public GoogleGeminiDataAnalyticsDataAgentIamMemberCondition ConditionInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberCondition">GoogleGeminiDataAnalyticsDataAgentIamMemberCondition</a>

---

##### `DataAgentIdInput`<sup>Optional</sup> <a name="DataAgentIdInput" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.property.dataAgentIdInput"></a>

```csharp
public string DataAgentIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MemberInput`<sup>Optional</sup> <a name="MemberInput" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.property.memberInput"></a>

```csharp
public string MemberInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `DataAgentId`<sup>Required</sup> <a name="DataAgentId" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.property.dataAgentId"></a>

```csharp
public string DataAgentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.property.member"></a>

```csharp
public string Member { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMember.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleGeminiDataAnalyticsDataAgentIamMemberCondition <a name="GoogleGeminiDataAnalyticsDataAgentIamMemberCondition" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberCondition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleGeminiDataAnalyticsDataAgentIamMemberCondition {
    string Expression,
    string Title,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberCondition.property.expression">Expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_member#expression GoogleGeminiDataAnalyticsDataAgentIamMember#expression}. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberCondition.property.title">Title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_member#title GoogleGeminiDataAnalyticsDataAgentIamMember#title}. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberCondition.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_member#description GoogleGeminiDataAnalyticsDataAgentIamMember#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberCondition.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_member#expression GoogleGeminiDataAnalyticsDataAgentIamMember#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberCondition.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_member#title GoogleGeminiDataAnalyticsDataAgentIamMember#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberCondition.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_member#description GoogleGeminiDataAnalyticsDataAgentIamMember#description}.

---

### GoogleGeminiDataAnalyticsDataAgentIamMemberConfig <a name="GoogleGeminiDataAnalyticsDataAgentIamMemberConfig" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleGeminiDataAnalyticsDataAgentIamMemberConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DataAgentId,
    string Member,
    string Role,
    GoogleGeminiDataAnalyticsDataAgentIamMemberCondition Condition = null,
    string Id = null,
    string Location = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConfig.property.dataAgentId">DataAgentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_member#data_agent_id GoogleGeminiDataAnalyticsDataAgentIamMember#data_agent_id}. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConfig.property.member">Member</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_member#member GoogleGeminiDataAnalyticsDataAgentIamMember#member}. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConfig.property.role">Role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_member#role GoogleGeminiDataAnalyticsDataAgentIamMember#role}. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConfig.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberCondition">GoogleGeminiDataAnalyticsDataAgentIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_member#id GoogleGeminiDataAnalyticsDataAgentIamMember#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_member#location GoogleGeminiDataAnalyticsDataAgentIamMember#location}. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_member#project GoogleGeminiDataAnalyticsDataAgentIamMember#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DataAgentId`<sup>Required</sup> <a name="DataAgentId" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConfig.property.dataAgentId"></a>

```csharp
public string DataAgentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_member#data_agent_id GoogleGeminiDataAnalyticsDataAgentIamMember#data_agent_id}.

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConfig.property.member"></a>

```csharp
public string Member { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_member#member GoogleGeminiDataAnalyticsDataAgentIamMember#member}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_member#role GoogleGeminiDataAnalyticsDataAgentIamMember#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConfig.property.condition"></a>

```csharp
public GoogleGeminiDataAnalyticsDataAgentIamMemberCondition Condition { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberCondition">GoogleGeminiDataAnalyticsDataAgentIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_member#condition GoogleGeminiDataAnalyticsDataAgentIamMember#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_member#id GoogleGeminiDataAnalyticsDataAgentIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_member#location GoogleGeminiDataAnalyticsDataAgentIamMember#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_gemini_data_analytics_data_agent_iam_member#project GoogleGeminiDataAnalyticsDataAgentIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleGeminiDataAnalyticsDataAgentIamMemberConditionOutputReference <a name="GoogleGeminiDataAnalyticsDataAgentIamMemberConditionOutputReference" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleGeminiDataAnalyticsDataAgentIamMemberConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberCondition">GoogleGeminiDataAnalyticsDataAgentIamMemberCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberConditionOutputReference.property.internalValue"></a>

```csharp
public GoogleGeminiDataAnalyticsDataAgentIamMemberCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGeminiDataAnalyticsDataAgentIamMember.GoogleGeminiDataAnalyticsDataAgentIamMemberCondition">GoogleGeminiDataAnalyticsDataAgentIamMemberCondition</a>

---



